import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "./components/pages/SingInSide";
import SignUpSide from "./components/pages/SingUpSide";
import Catalog from "./components/pages/Catalog";
import Construct from "./components/pages/Construct";
import AddQuestions from "./components/pages/AddQuestions";
import AddResults from "./components/pages/AddResults";
import Profile from "./components/pages/Profile";
import ProfileTest from "./components/pages/ProfileTest";
import UpdateUser from "./components/pages/UpdateUser";
import {observer} from "mobx-react-lite";
import ChangePassword from "./components/pages/ChangePassword";
import BeforeTestPass from "./components/pages/BeforeTestPass";
import PassingTest from "./components/pages/PassingTest";
import AfterTestPass from "./components/pages/AfterTestPass";
import SetPercents from "./components/pages/SetPercents";
import ProfileResult from "./components/pages/ProfileResult";
import UpdateResults from "./components/pages/UpdateResults";
import UpdateQuestions from "./components/pages/UpdateQuestions";
import UpdateTest from "./components/pages/UpdateTest";
import UpdatePercents from "./components/pages/UpdatePercents";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter><Routes> <Route path="/registration" element={<SignUpSide/>}/>
                <Route path="/login" element={<SignInSide/>}/>
                <Route path="/forgot" element={<ChangePassword/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/startTestPass" element={<BeforeTestPass/>}/>
                <Route path="/catalog/testPass" element={<PassingTest/>}/>
                <Route path="/catalog/endTestPass" element={<AfterTestPass/>}/>
                <Route path="/construct" element={<Construct/>}/>
                <Route path="/construct/updateTest" element={<UpdateTest/>}/>
                <Route path="/construct/addQuestions" element={<AddQuestions/>}/>
                <Route path="/construct/updateQuestions" element={<UpdateQuestions/>}/>
                <Route path="/construct/addResults" element={<AddResults/>}/>
                <Route path="/construct/updateResults" element={<UpdateResults/>}/>
                <Route path="/construct/setPercents" element={<SetPercents/>}/>
                <Route path="/construct/updatePercents" element={<UpdatePercents/>}/>
                <Route path="/lk" element={<Profile/>}/>
                <Route path="/lk/update" element={<UpdateUser/>}/>
                <Route path="/lk/res" element={<ProfileResult/>}/>
                <Route path="/lk/tests" element={<ProfileTest/>}/>
            </Routes></BrowserRouter>
        </div>
    );
}

export default observer(App);
