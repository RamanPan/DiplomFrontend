import {flow, types} from 'mobx-state-tree';
import AnswersStore from "./answersStore";
import {Test} from "./testsStore";
import {postReq} from "../components/utils/apiCalls";
import {API_CREATE_QUESTION, API_CREATE_TEST, API_GET_QUESTION} from "../components/utils/constans";

const Question = types
    .model('Question',{
        id: types.maybe(types.number),
        date_register: types.maybe(types.Date),
        statement: types.maybe(types.string),
        picture: types.maybe(types.string),
        type: types.maybe(types.string),
        category: types.maybe(types.string),
        difficult: types.maybe(types.string),

    })

const QuestionStore = types.
    model('QuestionStore',{
        passQuestion: types.maybe(Question)
}).actions(self => {
        return{
                birth: flow(function* (data) {
                        self.passQuestion = yield postReq(API_GET_QUESTION, data)
                }),
        }
})


export default QuestionStore;