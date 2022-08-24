import {cast, flow, types} from 'mobx-state-tree';
import {getReq, postReq} from "../components/utils/apiCalls";
import {
    API_CREATE_TEST,
    API_GET_BEST_TESTS,
    API_GET_FILTER_TESTS,
    API_GET_NEW_TESTS,
    API_GET_OLD_TESTS,
    API_GET_TEST,
    API_GET_TEST_UPDATE,
    API_GET_TESTS,
    API_GET_TESTS_BY_AUTHOR
} from "../components/utils/constans";

export var passTest;
export const Test = types
    .model('Test', {
        id: types.identifierNumber,
        created: types.string,
        name: types.string,
        testType: types.string,
        mark: types.number,
        author: types.string,
        numberQuestions: types.number,
        numberPasses: types.number,
        description: types.string,
        picture: types.string,
        testTypeNum: types.maybe(types.number),
        isDeterministic: types.maybe(types.boolean),
        optionNum: types.optional(types.number, 0)
    })
    .actions(self => {
        return {
            birth: flow(function* (data) {
                self.id = yield postReq(API_CREATE_TEST, data)
            }),
        }
    })
;
export const TestCard = types
    .model('TestCard', {
        id: types.identifierNumber,
        created: types.maybe(types.string),
        name: types.maybe(types.string),
        testType: types.maybe(types.string),
        mark: types.maybe(types.number),
        author: types.maybe(types.string),
        numberQuestions: types.maybe(types.number),
        numberPasses: types.maybe(types.number),
        description: types.maybe(types.string),
        picture: types.maybe(types.string),
    })


const TestStore = types
    .model('TestStore', {
        passingTest: types.maybe(Test),
        tests: types.array(TestCard),
    })
    .actions(self => {
        return {
            getTests: flow(function* (data) {
                if (data === undefined) {
                    let actual = yield getReq(API_GET_TESTS);
                    self.tests = cast(actual);
                } else {
                    if (data.userId !== undefined) self.passingTest = yield postReq(API_GET_TEST, data);
                    else self.passingTest = yield getReq(API_GET_TEST_UPDATE, data);
                }
            }),
            getOldTests: flow(function* () {
                let actual = yield getReq(API_GET_OLD_TESTS);
                self.tests = cast(actual);
            }),
            getFilterTests: flow(function* (data) {
                let actual = yield postReq(API_GET_FILTER_TESTS, data);
                self.tests = cast(actual);
            }),
            getNewTests: flow(function* () {
                let actual = yield getReq(API_GET_NEW_TESTS);
                self.tests = cast(actual);
            }),
            getBestTests: flow(function* () {
                let actual = yield getReq(API_GET_BEST_TESTS);
                self.tests = cast(actual);
            }),
            getTestsByAuthor: flow(function* (data) {
                let actual = yield postReq(API_GET_TESTS_BY_AUTHOR, data);
                self.tests = cast(actual);
            }),


        }
    });

export default TestStore;