import { createApp } from 'vue';
import store from '@/store/store.js'
import App from './App.vue';
import components from '@/components/UI/index.js';
import router from '@/router/router.js';
import VueCookies from 'vue-cookies'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app.use(VueCookies, { expires: '7d'})

app.use(router)
app.use(store);
app.mount('#app');