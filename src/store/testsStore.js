import {flow, types} from 'mobx-state-tree';
import resultsStore from "./resultsStore";
import questionsStore from "./questionsStore";
import {getReq, postReq} from "../components/utils/apiCalls";
import {API_ACTUAL_USER, API_CREATE_TEST, API_LOGIN, API_LOGOUT} from "../components/utils/constans";
import {ACCESS_TOKEN, NICKNAME} from "../components/pages/SingInSide";

export const Test = types
    .model('Test',{
        id: types.identifierNumber,
        date_register: types.maybe(types.Date),
        name: types.maybe(types.string),
        testType: types.maybe(types.string),
        mark: types.maybe(types.number),
        author: types.maybe(types.string),
        number_questions: types.maybe(types.number),
        number_passes: types.maybe(types.number),
        description: types.maybe(types.string),
        picture: types.maybe(types.string),
        results: types.optional(types.array(resultsStore),[]),
        questions: types.optional(types.array(questionsStore),[])
    })
    .actions(self => {
            return{
                    birth: flow(function* (data) {
                            self.id = yield postReq(API_CREATE_TEST, data)
                    }),
            }
    })
;


const TestStore = types
        .model('TestStore',{
        tests: types.array(Test)
    });

export default TestStore;