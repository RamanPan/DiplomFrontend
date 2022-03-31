import {types} from 'mobx-state-tree';
import AnswersStore from "./answersStore";
import {Test} from "./testsStore";

const QuestionStore = types
    .model('QuestionStore',{
        id: types.identifierNumber,
        date_register: types.Date,
        statement: types.string,
        picture: types.string,
        type: types.string,
        category: types.string,
        difficult: types.string,
        test: types.safeReference(types.late(() =>Test)),
        answers: types.array(AnswersStore),

    });

export default QuestionStore;