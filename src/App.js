import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide, {NICKNAME} from "./components/pages/SingInSide";
import SignUpSide from "./components/pages/SingUpSide";
import Catalog from "./components/pages/Catalog";
import Construct from "./components/pages/Construct";
import AddQuestions from "./components/pages/AddQuestions";
import AddResults from "./components/pages/AddResults";
import Profile from "./components/pages/Profile";
import ProfileTest from "./components/pages/ProfileTest";
import UpdateUser from "./components/pages/UpdateUser";

const App = () => {
    return (
    <div className="App">
            {/*<Route exact path="/"*/}
            {/*       render={(props) => <PollList isAuthenticated={this.state.isAuthenticated}*/}
            {/*                                    currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>*/}
            {/*</Route>*/}
            {/*<Route path="/login"*/}
            {/*       render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>*/}
               <BrowserRouter><Routes> <Route path="/registration" element={<SignUpSide/>}/>
                    <Route path="/login" element={<SignInSide/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/construct" element={<Construct/>}/>
                    <Route path="/construct/addQuestions" element={<AddQuestions/>}/>
                    <Route path="/construct/addResults" element={<AddResults/>}/>
                    <Route path="/lk" element={<Profile/>}/>
                    <Route path="/lk/update" element={<UpdateUser/>}/>
                   <Route path="/lk/tests" element={<ProfileTest/>}/></Routes></BrowserRouter>


            {/*<Route path="/users/:username"*/}
            {/*       render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>*/}
            {/*</Route>*/}
    </div>
  );
}

export default App;
