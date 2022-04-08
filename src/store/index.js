import {types} from 'mobx-state-tree';
import UsersStore, {ActualUser} from "./usersStore";
import UserTestsStore from "./usertestsStore";
import UserAnswersStore from "./useranswersStore";
import UserResultsStore from "./userresultsStore";
import TestStore from "./testsStore";
import ResultsStore from "./resultsStore";
import questionsStore from "./questionsStore";

const RootStore = types.model('RootStore',{
    usersStore: types.optional(UsersStore,{}),
    testsStore: types.optional(TestStore,{}),
    userAnswers: types.maybe(UserAnswersStore),
    userTests: types.maybe(UserTestsStore),
    userResults: types.maybe(UserResultsStore),
    questionStore: types.optional(questionsStore,{})


});

export default RootStore;
