export default class Router {
    constructor() {
        this.routes = [];
        window.addEventListener('popstate', () => this.handleRoute());
    };

    start() {
        this.handleRoute();
        this.bindLinks();
    };

    addRoute(path, callback) {
        this.routes.push({ path, callback });
    };

    navigateTo(path) {
        history.pushState(null, null, path);
        this.handleRoute();
    };

    handleRoute() {
        const path = window.location.pathname;

        for(const route of this.routes) {
            const paramNames = [];
            const regexPath = route.path.replace(/:([^/]+)/g, (_, key) => {
                paramNames.push(key);
                return '([^/]+)';
            });
            const regex = new RegExp(`^${regexPath}$`);
            const match = path.match(regex);

            if(match) {
                const params = [];
                paramNames.forEach((name, index) => {
                    params[name] = match[index + 1];
                });

                route.callback(params);
                return;
            }
        }
        console.log('Rota não encontrada!!!');
        this.navigateTo('/404');
    };

    bindLinks() {
        document.addEventListener('click', (ev) => {
            const target = ev.target;

            if (target.tagName === 'A') {
                ev.preventDefault();
                const path = target.getAttribute('href');
                this.navigateTo(path);
            }
        });
    };
};