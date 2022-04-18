import {types} from 'mobx-state-tree';
import {ActualUser} from "./usersStore";
import UserTestsStore from "./usertestsStore";
import QuestionStore from "./questionsStore";

const UserAnswersStore = types
    .model('UserAnswerStore',{
        id: types.identifierNumber,
        date_register: types.Date,
        user: types.reference(types.late(() =>ActualUser)),
        test: types.reference(types.late(() =>UserTestsStore)),
        question: types.reference(types.late(() =>QuestionStore)),
        correctness: types.boolean,
        answer: types.string

    });

export default UserAnswersStore;