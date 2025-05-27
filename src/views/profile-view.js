import BaseComponent from '../core/base-component.js';

export default class ProfileView extends BaseComponent {
    constructor(element, id) {
        super(element, id);
    };

    render() {
        this.element.innerHTML = `
            <p>Profile View : ${this.state.id}</p>
        `;
    };
};