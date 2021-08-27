import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/MainPosts/Main";
import Nav from "./components/Nav/Nav";
import MainBasic from "./components/MainBasic/MainBasic";
import {Route} from "react-router-dom";

function App(props) {
    return (
        <div className='main-wrapper'>
            <Header/>
            <Nav sitebar={props.state.sitebar}/>
            <div className='main-wrapper-basic'>
                <Route path = '/profile' component = { () => <Main  myPostsData={props.state.mainBasicPage}
                                                                    dispatch={props.dispatch}/> }/>
                <Route path = '/message' component = { () => <MainBasic personsData={props.state.mainPostsPage.personsData}
                                                                        messagesData={props.state.mainPostsPage.messagesData}
                                                                        textNewMessage={props.state.mainPostsPage.textNewMessage}
                                                                        dispatch={props.dispatch}/> }/>
                <Route path = '/news' component = {MainBasic}/>
                <Route path = '/music' component = {MainBasic}/>
                <Route path = '/settings' component = {MainBasic}/>
            </div>
        </div>
    );
}

export default App;