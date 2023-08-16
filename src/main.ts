import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { createHead } from '@vueuse/head'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)
app.use(createHead())
app.use(VueGtag, {
    config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID }
})

app.mount('#app')

export default app