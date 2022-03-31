import {types} from 'mobx-state-tree';
import resultsStore from "./resultsStore";
import questionsStore from "./questionsStore";

export const Test = types
    .model('Test',{
        id: types.identifierNumber,
        date_register: types.Date,
        name: types.string,
        testType: types.string,
        mark: types.maybe(types.number),
        author: types.string,
        number_questions: types.maybe(types.number),
        number_passes: types.maybe(types.number),
        description: types.maybe(types.string),
        picture: types.maybe(types.string),
        results: types.array(resultsStore),
        questions: types.optional(types.array(questionsStore),[])
    })


const TestStore = types
        .model('TestStore',{
        tests: types.array(Test)
    });

export default TestStore;