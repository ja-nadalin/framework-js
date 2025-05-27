import BaseComponent from '../core/base-component.js';
import UsersComponent from '../components/users-component.js';

export default class HomeView extends BaseComponent {
    constructor(element) {
        super(element);

        const usersComponent = new UsersComponent();
        usersComponent.getUsers(this.element);
    };

    render() {
        this.element.innerHTML = `
            <p>Users View</p>
        `;
    };
};