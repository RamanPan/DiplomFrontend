import { types} from 'mobx-state-tree';
import UsersStore  from "./usersStore";
import UserResultsStore from "./userresultsStore";
import TestStore from "./testsStore";
import questionsStore from "./questionsStore";
import answersStore from "./answersStore";


const RootStore = types.model('RootStore',{
    usersStore: types.optional(UsersStore,{}),
    testsStore: types.optional(TestStore,{}),
    questionStore: types.optional(questionsStore,{}),
    answerStore: types.optional(answersStore,{}),
    userResultsStore: types.optional(UserResultsStore,{})

});


export default RootStore;
