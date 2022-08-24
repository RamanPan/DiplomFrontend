import {API_LOGIN} from "./constans";
import {ACCESS_TOKEN} from "../pages/SingInSide";


const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',

    })

    if (ACCESS_TOKEN !== undefined && options.url !== API_LOGIN) {
        headers.append("Authorization", ACCESS_TOKEN)
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};
const requestForFile = (options) => {
    const headers = new Headers({})

    if (ACCESS_TOKEN !== undefined) {
        headers.append("Authorization", ACCESS_TOKEN)
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function postReq(path, Data) {
    return request({
        url: path,
        method: 'POST',
        body: JSON.stringify(Data)
    });
}


export function getReq(path, data) {
    let urlPath
    if (data !== undefined) urlPath = path + "/" + data
    else urlPath = path
    return request({
        url: urlPath,
        method: 'GET'
    });
}

export function putReq(path, Data) {
    return request({
        url: path,
        method: 'GET',
        body: JSON.stringify(Data)
    });
}

export function postReqFile(path, Data) {
    return requestForFile({
        url: path,
        method: 'POST',
        body: Data
    });
}

export function deleteReq(path, data) {
    return request({
        url: path + "/" + data,
        method: 'DELETE',
    });
}
