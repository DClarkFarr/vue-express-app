import TasksPage from '../components/pages/main/tasks';
import CategoriesPage from '../components/pages/main/categories';
import LoginPage from '../components/pages/main/login';
import FriendsPage from '../components/pages/main/friends'

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
        path: '/friends',
        component: FriendsPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
];