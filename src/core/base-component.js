export default class BaseComponent {
    constructor(element, initialState = {}) {
        this.element = element;
        this.state = { ...initialState };
        this.render();
    };

    setState(newState) {
        this.state = { ...this.state, ...newState };
    };

    render() {};

    mount() {};

    unmount() {};
};