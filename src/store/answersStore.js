import {flow, types} from 'mobx-state-tree';
import QuestionStore from "./questionsStore";
import {postReq} from "../components/utils/apiCalls";
import {API_CREATE_ANSWER, API_GET_ANSWERS} from "../components/utils/constans";

const Answer = types
    .model('Answer',{
        id: types.maybe(types.identifierNumber),
        date_register: types.maybe(types.string),
        statement: types.maybe(types.string),
        correctness:types.maybe(types.boolean),
    })

const AnswerStore = types
    .model('AnswerStore',{
        answers: types.optional(types.array(Answer),[])
    })
    .actions(self => {
        return{
            birth: flow(function* (data) {
                self.answers = yield postReq(API_GET_ANSWERS, data)
            }),
        }
    })
;


export default AnswerStore;