import {flow, types} from 'mobx-state-tree';
import {getReq} from "../components/utils/apiCalls";
import {API_GET_ANSWERS} from "../components/utils/constans";

const Answer = types
    .model('Answer', {
        id: types.maybe(types.identifierNumber),
        date_register: types.maybe(types.string),
        statement: types.maybe(types.string),
        correctness: types.maybe(types.boolean),
        number: types.maybe(types.number),
    })

const AnswersStore = types
    .model('AnswerStore', {
        answers: types.optional(types.array(Answer), [])
    })
    .actions(self => {
        return {
            birth: flow(function* (data) {
                self.answers = yield getReq(API_GET_ANSWERS, data)
            }),
        }
    })
;


export default AnswersStore;