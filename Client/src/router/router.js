import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/pages/HomePage';
import News from '@/components/pages/NewsPage';
import Settings from '@/components/pages/SettingsPage.vue';
import PersPage from '@/components/pages/PersPage.vue';
import Login from '@/components/LoginComponent.vue';
import Signin from '@/components/SigninComponent.vue';
import Welcome from '@/components/pages/WelcomeLoginPage.vue';


const routes = [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '/settings', component: Settings },
    { path: '/:username', component: PersPage },
    { path: '/login', component: Login },
    { path: '/signin', component: Signin },
    { path: '/notauth', component: '<h1>Not Auth</h1>' },
    { path: '/welcome', component: Welcome },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;