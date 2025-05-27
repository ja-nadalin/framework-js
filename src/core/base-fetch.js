export default class BaseFetch {
    constructor(params) {
        this.params = params;
        this.data = null;
        this.loading = true;
        this.error = false;
    };

    async dataFetch() {
        await fetch(this.params)
            .then((response) => response.json())
            .then((response) => this.data = response)
            .catch((error) => this.error = true)
            .finally(() => this.loading = false);

        return {
            data: this.data,
            loading: this.loading,
            error: this.error
        };
    };
};