import HomeView from './src/views/home-view.js';
import ProfileView from './src/views/profile-view.js';
import UsersView from './src/views/users-view.js';
import NotFoundView from './src/views/notfound-view.js';

import Router from './src/core/router.js';

const appElement = document.getElementById('app');

//Router
const router = new Router();
router.addRoute('/', () => new HomeView(appElement));
router.addRoute('/profile/:id', (id) => new ProfileView(appElement, id));
router.addRoute('/users', () => new UsersView(appElement));
router.addRoute('/404', () => new NotFoundView(appElement));
router.start();