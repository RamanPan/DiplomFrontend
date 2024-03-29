import {cast, flow, types} from 'mobx-state-tree';
import {postReq} from "../components/utils/apiCalls";
import {API_GET_USERS_RESULTS} from "../components/utils/constans";

const UserResult = types
    .model('UserResult', {
        id: types.identifierNumber,
        created: types.string,
        header: types.string,
        description: types.string,
        name: types.string,
        picture: types.string,
        result: types.number,
        correctness: types.boolean,
    });

const UserResultsStore = types
    .model('UserResultsStore', {
        userResults: types.array(UserResult)

    })
    .actions(self => {
        return {
            getResultsByUser: flow(function* (data) {
                let actual = yield postReq(API_GET_USERS_RESULTS, data);
                self.userResults = cast(actual);
            }),
        }
    });

export default UserResultsStore;