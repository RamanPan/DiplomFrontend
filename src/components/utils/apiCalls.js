import qs from 'query-string';
import RootStore from "../../store";
import {ActualUser} from "../../store/usersStore";
import useStore from "./useStore";
import { API_LOGIN, API_REGISTER} from "./constans";
import {ACCESS_TOKEN} from "../pages/SingInSide";

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

    })

    if(ACCESS_TOKEN !== undefined && options.url !== API_LOGIN) {
        headers.append("Authorization", ACCESS_TOKEN)
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};
const requestForFile = (options) => {
    const headers = new Headers({
    })

    if(ACCESS_TOKEN !== undefined) {
        headers.append("Authorization", ACCESS_TOKEN)
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function postReq(path,Data) {
    return request({
        url: path,
        method: 'POST',
        body: JSON.stringify(Data)
    });
}


export function getReq(path) {
    return request({
        url: path,
        method: 'GET',
    });
}
export function putReq(path,Data) {
    return request({
        url: path,
        method: 'GET',
        body: JSON.stringify(Data)
    });
}
export function postReqFile(path,Data) {
    return requestForFile({
        url: path,
        method: 'POST',
        body: Data
    });
}
export function deleteReq(path,data) {
    return request({
        url: path,
        method: 'DELETE',
        body: JSON.stringify(data)
    });
}

// class ApiCall {
//
//
//     async perform(url, data, config) {
//         const request = await fetch(`${url}`, {
//             ...config,
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': 'Bearer ' + ACCESS_TOKEN,
//                 Vary: "Accept",
//
//             }
//         });
//
//         return await request.json();
//     }
//
//     async get(path, searchParams) {
//         return await this.perform(`${path}?${qs.stringify(searchParams)}`);
//     }
//
//     async post(path, payload) {
//         return await this.perform(path, payload, {
//             method: 'POST'
//         });
//     }
//
//     async put(path, payload) {
//         return await this.perform(path, payload, {
//             method: 'PUT'
//         });
//     }
//
//     async delete(path) {
//         return await this.perform(path, null, {
//             method: 'DELETE'
//         });
//     }
// }
//
// export default new ApiCall();