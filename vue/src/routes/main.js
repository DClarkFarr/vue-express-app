import TasksPage from '../components/pages/main/tasks';
import CategoriesPage from '../components/pages/main/categories';
import LoginPage from '../components/pages/main/login';
import FriendsPage from '../components/pages/main/friends';

import MyWrapper from '../components/pages/me/wrap';
import MyProfile from '../components/pages/me/profile';

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
    {
        path: '/me',
        component: MyWrapper,
        children: [
            {
                path: 'profile',
                component: MyProfile,
            }
        ],
    }
];