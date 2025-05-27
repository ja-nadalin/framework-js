import BaseComponent from '../core/base-component.js';

export default class HomeView extends BaseComponent {
    constructor(element) {
        super(element);
    };

    render() {
        this.element.innerHTML = `
            <p>Home View</p>
        `;
    };
};