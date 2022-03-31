import {types} from 'mobx-state-tree';
import {Test} from "./testsStore";

const ResultsStore = types
    .model('ResultsStore',{
        id: types.identifierNumber,
        date_register: types.Date,
        header: types.string,
        description: types.string,
        picture: types.string,
        test: types.safeReference(types.late(() =>Test))
});

export default ResultsStore;