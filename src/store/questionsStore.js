import {flow, types} from 'mobx-state-tree';
import {getReq, postReq} from "../components/utils/apiCalls";
import {API_GET_QUESTION, API_GET_QUESTIONS} from "../components/utils/constans";

const Question = types
    .model('Question', {
        id: types.maybe(types.number),
        date_register: types.maybe(types.Date),
        statement: types.maybe(types.string),
        picture: types.maybe(types.string),
        type: types.maybe(types.string),
        category: types.maybe(types.string),
        difficult: types.maybe(types.string),
        typeNum: types.maybe(types.number),
        categoryNum: types.maybe(types.number),
        difficultNum: types.maybe(types.number),
        number: types.maybe(types.number),

    })

const QuestionsStore = types.model('QuestionStore', {
    passQuestion: types.maybe(Question),
    questions: types.maybe(types.array(Question))
}).actions(self => {
    return {
        birth: flow(function* (data) {
            self.passQuestion = yield postReq(API_GET_QUESTION, data)
        }),
        getQuestions: flow(function* (data) {
            self.questions = yield getReq(API_GET_QUESTIONS, data)
        }),
    }
})


export default QuestionsStore;