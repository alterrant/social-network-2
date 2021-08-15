import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/MainPosts/Main";
import Nav from "./components/Nav/Nav";
import MainBasic from "./components/MainBasic/MainBasic";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
      <BrowserRouter>
        <div className='main-wrapper'>
            <Header/>
            <Nav sitebar={props.state.sitebar}/>
            <div className='main-wrapper-basic'>
                <Route path = '/profile' component = { () => <Main  myPostsData={props.state.mainBasicPage.myPostsData}/> }/>
                <Route path = '/message' component = { () => <MainBasic personsData={props.state.mainPostsPage.personsData} messagesData={props.state.mainPostsPage.messagesData} /> }/>
                <Route path = '/news' component = {MainBasic}/>
                <Route path = '/music' component = {MainBasic}/>
                <Route path = '/settings' component = {MainBasic}/>
            </div>
        </div>
      </BrowserRouter>
    );
}

export default App;