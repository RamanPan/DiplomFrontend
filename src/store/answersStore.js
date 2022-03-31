import {types} from 'mobx-state-tree';
import QuestionStore from "./questionsStore";

const AnswerStore = types
    .model('AnswerStore',{
        id: types.identifierNumber,
        date_register: types.Date,
        statement: types.string,
        correctness:types.boolean,
        question:types.safeReference(types.late(() =>QuestionStore))

    });

export default AnswerStore;