import axios from "axios";

class Request {

    static init(origin) {
        const request = new Request();
        request.origin = origin;
        return request;
    }

    async get(url, param) {
        return new Promise((resolve, reject) => {
            axios.get(this.origin + url, {
                params: param
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(this.errorHandler(error))
                })
        })
    }

    async post(url) {

    }

    async patch(url) {

    }

    async put(url) {

    }

    async delete(url) {

    }

    async login() {

    }

    async logout() {

    }

    errorHandler() {

    }
}

export default Request;