import axios from 'axios'

export const MethodType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const request = (api, method = MethodType.GET, params = {}, config = {}) => {
    const data = (method === 'GET') ? 'params' : 'data';
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    };
    if (config.headers) {
        headers = {
            ...headers,
            ...config.headers
        }
    }
    // TODO
    return new Promise((resolve, reject) => {
        axios({
                url: api,
                method,
                [data]: params,
                headers,
            }).then(resolve)
            .catch(error => {
                reject(error);
            });
    });
};