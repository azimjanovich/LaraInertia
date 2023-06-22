import _ from 'lodash'
window._ = _

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios'
window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * Standart vue imports
 */
import { h, ref, reactive, onMounted, computed } from 'vue'
window.h = h
window.ref = ref
window.reactive = reactive
window.onMounted = onMounted
window.computed = computed

/**
 * naive-ui imports for render icon
 */
import { NIcon } from "naive-ui"
window.renderIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon) });
}

/**
 * default design settings for dashboard
 */
localStorage.getItem('settings') === null ? localStorage.setItem('settings', JSON.stringify({
    isDark: false,
    design: {
        common: {
            borderRadius: "6px",
            borderRadiusSmall: "4px",
            primaryColor: "#2563ebFF",
            primaryColorHover: "#3b82f6FF",
            primaryColorPressed: "#1d4ed8FF",
            primaryColorSuppl: "#2563ebFF",
            infoColor: "#0ea5e9FF",
            infoColorHover: "#38bdf8FF",
            infoColorPressed: "#0284c7FF",
            infoColorSuppl: "#0ea5e9FF",
            successColor: "#10b981FF",
            successColorHover: "#34d399FF",
            successColorPressed: "#059669FF",
            successColorSuppl: "#10b981FF",
            warningColor: "#f59e0bFF",
            warningColorHover: "#fbbf24FF",
            warningColorPressed: "#d97706FF",
            warningColorSuppl: "#f59e0bFF",
            errorColor: "#dc2626FF",
            errorColorHover: "#ef4444FF",
            errorColorPressed: "#b91c1cFF",
            errorColorSuppl: "#dc2626FF",
            textColorBase: "#0f172aFF",
            textColor3: "#475569FF",
            textColorDisabled: "#cbd5e1FF",
            placeholderColor: "#94a3b8FF",
            placeholderColorDisabled: "#cbd5e1FF",
            iconColor: "#64748bFF",
            iconColorHover: "#94a3b8FF",
            iconColorPressed: "#475569FF",
            iconColorDisabled: "#cbd5e1FF"
        }
    }
})) : null
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
