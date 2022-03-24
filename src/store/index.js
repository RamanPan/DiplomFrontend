import {types} from 'mobx-state-tree';
import UsersStore from "./usersStore";

const RootStore = types.model('RootStore',{
    users: UsersStore,
    tests: TestStore,

});

export default RootStore;
