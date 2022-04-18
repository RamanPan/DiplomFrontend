import {flow, types} from 'mobx-state-tree';
import {getReq, postReq} from "../components/utils/apiCalls";
import {API_ACTUAL_USER, API_LOGIN, API_LOGOUT} from "../components/utils/constans";
import {ACCESS_TOKEN} from "../components/pages/SingInSide";

export const User = types
    .model('User',{
        id: types.identifierNumber,
        date_register: types.Date,
        nickname: types.string,
        fullname: types.string,
        email: types.string,
        role: types.string,
        description: types.maybe(types.string),
        picture: types.maybe(types.string),
    })
    .actions(self => {
        return{
        }
    })
;

export const ActualUser = types
    .model('ActualUser',{
        id: types.identifierNumber,
        created: types.string,
        nickname: types.string,
        fullname: types.string,
        email: types.string,
        role: types.string,
        description: types.string,
        picture: types.string,
        countPassed: types.number,
        countCreated: types.number,
        token: types.string,

    })
;



const UsersStore = types
    .model('UsersStore',{
        users: types.array(User),
        me: types.maybe(ActualUser)

    })
    .actions(self => {
        return{
            login: flow(function* (data) {
                self.me = yield postReq(API_LOGIN, data)
            }),
            exit: flow(function* () {
                let i = yield getReq(API_LOGOUT);
                self.me = undefined
            }),
            needUser: flow(function* (data) {
                let actual = yield postReq(API_ACTUAL_USER,data);
                actual["token"] = ACCESS_TOKEN;
                console.log(actual)
                self.me = actual;
            }),
        }
    })
;

export default UsersStore;