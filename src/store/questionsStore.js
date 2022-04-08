import {flow, types} from 'mobx-state-tree';
import AnswersStore from "./answersStore";
import {Test} from "./testsStore";
import {postReq} from "../components/utils/apiCalls";
import {API_CREATE_QUESTION, API_CREATE_TEST} from "../components/utils/constans";

const QuestionStore = types
    .model('QuestionStore',{
        id: types.maybe(types.number),
        date_register: types.maybe(types.Date),
        statement: types.maybe(types.string),
        picture: types.maybe(types.string),
        type: types.maybe(types.string),
        category: types.maybe(types.string),
        difficult: types.maybe(types.string),
        test: types.safeReference(types.late(() =>Test)),
        answers: types.optional(types.array(AnswersStore),[]),

    }).actions(self => {
            return{
                    birth: flow(function* (data) {
                            self.id = yield postReq(API_CREATE_QUESTION, data)
                    }),
            }
    })

export default QuestionStore;