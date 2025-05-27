import BaseComponent from '../core/base-component.js';

export default class NotFoundView extends BaseComponent {
    constructor(element) {
        super(element);
    };

    render() {
        this.element.innerHTML = `
            <p>404 - Page not found.</p>
        `;
    };
};