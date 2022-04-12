import {cast, flow, types} from 'mobx-state-tree';
import {ActualUser, User} from "./usersStore";
import UserTestsStore from "./usertestsStore";
import ResultsStore from "./resultsStore";
import {getReq, postReq} from "../components/utils/apiCalls";
import {
    API_GET_BEST_TESTS,
    API_GET_FILTER_TESTS,
    API_GET_NEW_TESTS,
    API_GET_OLD_TESTS,
    API_GET_TEST,
    API_GET_TESTS, API_GET_USERS_RESULTS
} from "../components/utils/constans";

const UserResult = types
    .model('UserResult',{
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
    .model('UserResultsStore',{
            userResults: types.array(UserResult)

    })
    .actions(self => {
        return{
            getResultsByUser: flow(function* (data) {
                let actual = yield postReq(API_GET_USERS_RESULTS,data);
                self.userResults = cast(actual);
            }),



        }
    });

export default UserResultsStore;