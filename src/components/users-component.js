import BaseFetch from '../core/base-fetch.js';

export default class UsersComponent extends BaseFetch {
    constructor() {
        super(`https://jsonplaceholder.typicode.com/users`);
    };

    getUsers(element) {
        this.dataFetch()
            .then((users) => {
                if(users.error) {
                    element.insertAdjacentHTML('beforeend', `<p>Opps!!! Algo deu errado!!!</p>`);
                    return;
                }

                if(users.loading) {
                    element.insertAdjacentHTML('beforeend', `<p>Aguarde, carregando...</p>`);
                    return;
                }

                if(users.data.length === 0) {
                    element.insertAdjacentHTML('beforeend', `<p>Nenhum registro encontrado!!!</p>`);
                    return;
                }

                let templateHTML = null;

                users.data.forEach((user) => {
                    templateHTML = `
                        <p>ID: ${user.id}</p>
                        <p>Name: ${user.name}</p>
                        <p>Username: ${user.username}</p>
                        <p>Email: ${user.email}</p>
                        <p>Address: ${user.address.street}, ${user.address.suite}</p>
                        <p>City: ${user.address.city}</p>
                        <p>Zipcode: ${user.address.zipcode}</p>
                        <p>Geo: Lat: ${user.address.geo.lat} - Lng: ${user.address.geo.lng}</p>
                        <p>Phone: ${user.phone}</p>
                        <p>Website: ${user.website}</p>
                        <p>Company: ${user.company.name}</p>
                        <p>${user.company.catchPhrase}</p>
                        <p>${user.company.bs}</p>
                    `;
                    element.insertAdjacentHTML('beforeend', templateHTML);
                });
            });
    };
};