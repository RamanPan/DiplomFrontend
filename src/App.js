import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "./components/pages/SingInSide";
import SignUpSide from "./components/pages/SingUpSide";
import Catalog from "./components/pages/Catalog";
import Construct from "./components/pages/Construct";
import AddQuestions from "./components/pages/AddQuestions";
import AddResults from "./components/pages/AddResults";
import Profile from "./components/pages/Profile";
import ProfileTest from "./components/pages/ProfileTest";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            {/*<Route exact path="/"*/}
            {/*       render={(props) => <PollList isAuthenticated={this.state.isAuthenticated}*/}
            {/*                                    currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>*/}
            {/*</Route>*/}
            {/*<Route path="/login"*/}
            {/*       render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>*/}
            <Route path="/registration" element={<SignUpSide/>}/>
            <Route path="/login" element={<SignInSide/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/construct" element={<Construct/>}/>
            <Route path="/construct/addQuestions" element={<AddQuestions/>}/>
            <Route path="/construct/addResults" element={<AddResults/>}/>
                <Route path="/lk" element={<Profile/>}/>
                <Route path="/lk/tests" element={<ProfileTest/>}/>
            {/*<Route path="/users/:username"*/}
            {/*       render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>*/}
            {/*</Route>*/}
    </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
