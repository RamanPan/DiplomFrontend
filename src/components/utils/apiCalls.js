import qs from 'query-string';
import RootStore from "../../store";
import {ActualUser} from "../../store/usersStore";
import useStore from "./useStore";
import {ACCESS_TOKEN, API_LOGIN, API_REGISTER} from "./constans";

// const {Token} = useStore();
//
//
//
//
// export function postReg(path, data) {
//     const request = fetch(`${path}`,{
//         method:'POST',
//         body:JSON.stringify(data)
//     });
//     return request.json();
// }

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        Vary: "Accept",

    })

    // if(localStorage.getItem(ACCESS_TOKEN)) {
    //     headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    // }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                console.log(json)
                return json;
            })
        );
};

export function createUser(Data) {
    return request({
        url: API_REGISTER,
        method: 'POST',
        body: JSON.stringify(Data)
    });
}

export function loginUser(Data) {
    return request({
        url: API_LOGIN,
        method: 'POST',
        body: JSON.stringify(Data)
    });
}

class ApiCall {


    async perform(url, data, config) {
        const request = await fetch(`${url}`, {
            ...config,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + ACCESS_TOKEN,
                Vary: "Accept",

            }
        });

        return await request.json();
    }

    async get(path, searchParams) {
        return await this.perform(`${path}?${qs.stringify(searchParams)}`);
    }

    async post(path, payload) {
        return await this.perform(path, payload, {
            method: 'POST'
        });
    }

    async put(path, payload) {
        return await this.perform(path, payload, {
            method: 'PUT'
        });
    }

    async delete(path) {
        return await this.perform(path, null, {
            method: 'DELETE'
        });
    }
}

export default new ApiCall();