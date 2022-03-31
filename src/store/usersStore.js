import {flow, types} from 'mobx-state-tree';
import {loginUser} from "../components/utils/apiCalls";

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
        id: types.maybe(types.identifierNumber),
        created: types.maybe(types.Date),
        nickname: types.maybe(types.string),
        fullname: types.maybe(types.string),
        email: types.maybe(types.string),
        role: types.maybe(types.string),
        description: types.maybe(types.string),
        picture: types.maybe(types.string),
        token: types.maybe(types.string),

    })

;
export const Token = types
    .model('Token',{
        statement: types.string,
    })


const UsersStore = types
    .model('UsersStore',{
        users: types.array(User),
        me: types.maybe(ActualUser)

    })
    .actions(self => {
        return{
            login: flow(function* (data) {
                self.me = yield loginUser(data)
            })
        }
    })
;

export default UsersStore;