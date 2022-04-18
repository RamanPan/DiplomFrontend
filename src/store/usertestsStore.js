import {types} from 'mobx-state-tree';
import {ActualUser} from "./usersStore";
import {Test} from "./testsStore";

const UserTestsStore = types
    .model('UserTestsStore',{
        id: types.identifierNumber,
        date_register: types.Date,
        user: types.reference(types.late(() =>ActualUser)),
        test: types.reference(types.late(() =>Test)),
        correctness: types.string,
        mark: types.number

    });

export default UserTestsStore;