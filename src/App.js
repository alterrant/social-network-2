import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/MainPosts/Main";
import {Route} from "react-router-dom";
import MainBasicContainer from "./components/MainBasic/MainBasicContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";

function App() {
    return (
        <div className='main-wrapper'>
            <Header/>
            <NavContainer />
            <div className='main-wrapper-basic'>
                <Route path = '/profile' component = { () => <Main  /> }/>
                <Route path = '/message' component = { () => <MainBasicContainer /> }/>
                <Route path = '/users' component = { () => <UsersPageContainer/> }/>
                <Route path = '/music' component = {MainBasicContainer}/>
                <Route path = '/settings' component = {MainBasicContainer}/>
            </div>
        </div>
    );
}

export default App;