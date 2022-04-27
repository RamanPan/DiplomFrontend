import {flow, types} from 'mobx-state-tree';
import { postReq} from "../components/utils/apiCalls";
import {API_CREATE_USERS_ANSWER, API_GET_TEST, API_GET_TESTS} from "../components/utils/constans";


const UserAnswersStore = types
    .model('UserAnswerStore',{
        id: types.maybe(types.number),
    })
    .actions(self => {
            return{
                    createUserAnswer: flow(function* (data) {
                           self.id =  yield postReq(API_CREATE_USERS_ANSWER,data)


                    })}}
    );

export default UserAnswersStore;