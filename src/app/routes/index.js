import Dashboard from 'app/layout/layout.js';
import Home from 'app/layout/home.js';

var indexRoutes = [
    { path: "/", name: "Home", component: Home, requireAuth: false },
    { path: "/", name: "Home", component: Dashboard, requireAuth: true }
];

export default indexRoutes;
