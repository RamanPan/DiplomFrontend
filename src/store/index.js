import {types} from 'mobx-state-tree';
import UsersStore from "./usersStore";
import UserResultsStore from "./userresultsStore";
import TestStore from "./testsStore";

import UserAnswersStore from "./useranswersStore";
import QuestionsStore from "./questionsStore";
import AnswersStore from "./answersStore";
import ResultsStore from "./resultsStore";


const RootStore = types.model('RootStore', {
    usersStore: types.optional(UsersStore, {}),
    testsStore: types.optional(TestStore, {}),
    questionStore: types.optional(QuestionsStore, {}),
    answerStore: types.optional(AnswersStore, {}),
    userResultsStore: types.optional(UserResultsStore, {}),
    resultsStore: types.optional(ResultsStore, {}),
    userAnswersStore: types.optional(UserAnswersStore, {})

});


export default RootStore;
