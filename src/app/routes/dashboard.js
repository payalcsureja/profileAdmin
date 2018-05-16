import Dashboard from 'app/dashboard/dashboard.js';
import UserPage from 'app/userPage/userPage.js';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/user-page", name: "User Profile", icon: "users_single-02", component: UserPage },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
