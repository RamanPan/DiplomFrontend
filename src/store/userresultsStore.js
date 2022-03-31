import {types} from 'mobx-state-tree';
import {ActualUser, User} from "./usersStore";
import UserTestsStore from "./usertestsStore";
import ResultsStore from "./resultsStore";

const UserResultsStore = types
    .model('UserResultsStore',{
        id: types.identifierNumber,
        date_register: types.Date,
        user: types.reference(types.late(() =>ActualUser)),
        test: types.reference(types.late(() =>ResultsStore)),

});

export default UserResultsStore;