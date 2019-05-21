import TasksPage from '../components/pages/main/tasks';
import CategoriesPage from '../components/pages/main/categories';
import LoginPage from '../components/pages/main/login';

export default [
    {
        path: '/',
        component: TasksPage,
    },
    {
        path: '/categories',
        component: CategoriesPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
];