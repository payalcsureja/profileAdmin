import Dashboard from 'app/dashboard/dashboard.js';
import UserPage from 'app/userPage/userPage.js';

import Callback from 'app/auth/callback';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/user-page", name: "User Profile", icon: "users_single-02", component: UserPage, requireAuth: true },
    { path: "/callback", component: Callback, hide: true },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
