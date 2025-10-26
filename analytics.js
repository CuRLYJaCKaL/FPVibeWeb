/**
 * FPVibe Privacy-Friendly Analytics
 * No cookies, no tracking, GDPR compliant
 * Data stored in localStorage only
 */

const FPVibeAnalytics = {
    storageKey: 'fpvibe-analytics',

    // Initialize analytics
    init() {
        this.trackPageView();
        this.trackScrollDepth();
        this.trackTimeOnPage();
        this.trackClicks();
    },

    // Get or create analytics storage
    getStorage() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : { events: [], pageViews: 0, sessions: 0 };
    },

    // Save analytics storage
    saveStorage(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    },

    // Track an event
    trackEvent(eventName, eventData = {}) {
        const storage = this.getStorage();
        const event = {
            name: eventName,
            data: eventData,
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            referrer: document.referrer || 'direct'
        };

        storage.events.push(event);

        // Keep only last 100 events (privacy + storage limit)
        if (storage.events.length > 100) {
            storage.events = storage.events.slice(-100);
        }

        this.saveStorage(storage);
        console.log('[FPVibe Analytics]', eventName, eventData);
    },

    // Track page view
    trackPageView() {
        const storage = this.getStorage();
        storage.pageViews = (storage.pageViews || 0) + 1;
        this.saveStorage(storage);

        this.trackEvent('page_view', {
            path: window.location.pathname,
            title: document.title,
            language: localStorage.getItem('fpvibe-lang') || 'en'
        });
    },

    // Track scroll depth
    trackScrollDepth() {
        let maxScroll = 0;
        let scrollTracked = { 25: false, 50: false, 75: false, 100: false };

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );

            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
            }

            // Track milestones
            [25, 50, 75, 100].forEach(milestone => {
                if (scrollPercent >= milestone && !scrollTracked[milestone]) {
                    scrollTracked[milestone] = true;
                    this.trackEvent('scroll_depth', { depth: milestone });
                }
            });
        }, { passive: true });
    },

    // Track time on page
    trackTimeOnPage() {
        const startTime = Date.now();

        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000); // seconds
            this.trackEvent('time_on_page', { seconds: timeSpent });
        });
    },

    // Track clicks on important elements
    trackClicks() {
        // Track "Coming Soon" badge clicks
        document.addEventListener('click', (e) => {
            // Support/Privacy links
            if (e.target.classList.contains('link')) {
                this.trackEvent('navigation_click', {
                    link: e.target.getAttribute('href'),
                    text: e.target.textContent
                });
            }

            // Language switcher
            if (e.target.closest('#langSwitcher')) {
                this.trackEvent('language_switch', {
                    to: e.target.textContent.trim()
                });
            }

            // Email contact
            if (e.target.getAttribute('href')?.startsWith('mailto:')) {
                this.trackEvent('email_click', {
                    email: e.target.getAttribute('href').replace('mailto:', '')
                });
            }

            // Logo clicks (auto-zoom)
            if (e.target.classList.contains('logo') || e.target.closest('.logo')) {
                this.trackEvent('logo_click', { action: 'auto_zoom' });
            }
        });
    },

    // Get analytics summary
    getSummary() {
        const storage = this.getStorage();
        const events = storage.events || [];

        const summary = {
            totalPageViews: storage.pageViews || 0,
            totalEvents: events.length,
            eventsByType: {},
            averageTimeOnPage: 0,
            maxScrollDepth: 0,
            languagePreference: localStorage.getItem('fpvibe-lang') || 'en'
        };

        // Group events by type
        events.forEach(event => {
            summary.eventsByType[event.name] = (summary.eventsByType[event.name] || 0) + 1;

            // Calculate averages
            if (event.name === 'time_on_page' && event.data.seconds) {
                summary.averageTimeOnPage += event.data.seconds;
            }
            if (event.name === 'scroll_depth' && event.data.depth > summary.maxScrollDepth) {
                summary.maxScrollDepth = event.data.depth;
            }
        });

        // Average time on page
        const timeEvents = summary.eventsByType['time_on_page'] || 1;
        summary.averageTimeOnPage = Math.round(summary.averageTimeOnPage / timeEvents);

        return summary;
    },

    // Export analytics data
    exportData() {
        const storage = this.getStorage();
        const blob = new Blob([JSON.stringify(storage, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fpvibe-analytics-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    // Clear analytics data
    clearData() {
        if (confirm('Clear all analytics data? This cannot be undone.')) {
            localStorage.removeItem(this.storageKey);
            console.log('[FPVibe Analytics] Data cleared');
            location.reload();
        }
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => FPVibeAnalytics.init());
} else {
    FPVibeAnalytics.init();
}

// Make it globally available
window.FPVibeAnalytics = FPVibeAnalytics;
