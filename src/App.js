import './App.css';

import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import MainBasicContainer from "./components/MainBasic/MainBasicContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import MainContainer from "./components/MainPosts/MainContainer";

function App() {
    return (
        <div className='main-wrapper'>
            <Header/>
            <NavContainer />
            <div className='main-wrapper-basic'>
                <Route path = '/profile/:userId?' component = { () => <MainContainer  /> }/>
                <Route path = '/message' component = { () => <MainBasicContainer /> }/>
                <Route path = '/users' component = { () => <UsersPageContainer/> }/>
                <Route path = '/music' component = {MainBasicContainer}/>
                <Route path = '/settings' component = {MainBasicContainer}/>
            </div>
        </div>
    );
}

export default App;