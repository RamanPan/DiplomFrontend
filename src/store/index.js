import {flow, types} from 'mobx-state-tree';
import UsersStore, {ActualUser} from "./usersStore";
import UserTestsStore from "./usertestsStore";
import UserAnswersStore from "./useranswersStore";
import UserResultsStore from "./userresultsStore";
import TestStore from "./testsStore";
import ResultsStore from "./resultsStore";
import questionsStore from "./questionsStore";
import answersStore from "./answersStore";
import {postReq} from "../components/utils/apiCalls";
import {API_GET_ANSWERS} from "../components/utils/constans";


const RootStore = types.model('RootStore',{
    usersStore: types.optional(UsersStore,{}),
    testsStore: types.optional(TestStore,{}),
    questionStore: types.optional(questionsStore,{}),
    answerStore: types.optional(answersStore,{}),
    userResultsStore: types.optional(UserResultsStore,{})

});


export default RootStore;
