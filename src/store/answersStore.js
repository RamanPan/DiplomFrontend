import {flow, types} from 'mobx-state-tree';
import QuestionStore from "./questionsStore";
import {postReq} from "../components/utils/apiCalls";
import {API_CREATE_ANSWER} from "../components/utils/constans";

const AnswerStore = types
    .model('AnswerStore',{
        id: types.maybe(types.identifierNumber),
        date_register: types.maybe(types.string),
        statement: types.maybe(types.string),
        correctness:types.maybe(types.boolean),
        question:types.safeReference(types.late(() =>QuestionStore))
    })
        .actions(self => {
                return{
                        birth: flow(function* (data) {
                                self.id = yield postReq(API_CREATE_ANSWER, data)
                        }),
                }
        })
        ;

export default AnswerStore;