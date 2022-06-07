import {flow, types} from 'mobx-state-tree';
import {Test} from "./testsStore";
import {postReq} from "../components/utils/apiCalls";
import {API_GET_QUESTION, API_GET_QUESTIONS, API_GET_RESULTS} from "../components/utils/constans";

const Result = types
    .model("Result", {
        id: types.identifierNumber,
        header: types.string,
        description: types.string,
        picture: types.string,
        startCondition: types.number,
        endCondition: types.number,
        number: types.maybe(types.number),
        correctness: types.boolean,
})


const ResultsStore = types
    .model('ResultsStore',{
        results: types.array(Result)
    })
    .actions(self => {
            return{
                    getResults: flow(function* (data) {
                            self.results = yield postReq(API_GET_RESULTS, data)
                    }),
            }
    })
;

export default ResultsStore;