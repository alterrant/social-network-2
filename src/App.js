import './App.css';

import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import MainBasicContainer from "./components/MainBasic/MainBasicContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import MainContainer from "./components/MainPosts/MainContainer";
import Login from "./components/Login/Login";
import * as React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.isInitialized) return <Preloader/>
    return (
        <div className='main-wrapper'>
          <Header/>
          <NavContainer/>
          <div className='main-wrapper-basic'>
            <Route path='/profile/:userId?' component={() => <MainContainer/>}/>
            <Route path='/message' component={() => <MainBasicContainer/>}/>
            <Route path='/users' component={() => <UsersPageContainer/>}/>
            <Route path='/music' component={MainBasicContainer}/>
            <Route path='/settings' component={MainBasicContainer}/>
            <Route path='/login' component={() => <Login/>}/>
          </div>
        </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App);