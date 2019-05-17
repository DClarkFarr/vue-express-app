import HomePage from '../components/pages/main/home';
import AboutPage from '../components/pages/main/about';
import LoginPage from '../components/pages/main/login';

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
];