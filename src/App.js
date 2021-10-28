import './App.css';

import * as React from "react";
import Header from "./components/Header/Header";
import {HashRouter, Route} from "react-router-dom";
import MainBasicContainer from "./components/MainBasic/MainBasicContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import MainContainer from "./components/MainPosts/MainContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store-reduxe";
//import Login from "./components/Login/Login";
import {Suspense} from "react";

const Login = React.lazy(() => import('./components/Login/Login'));

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
            <Route path='/login' component={() => {
              return <Suspense fallback={<div>Загрузка...</div>}>
                <Login/>
              </Suspense>
            }
            }/>
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

let AppConnect =  connect(mapStateToProps, {initializeApp})(App);

const AppContainer = () => {
  return (
      <HashRouter>
        <Provider store={store}>
          <AppConnect/>
        </Provider>
      </HashRouter>
  )
}

export default AppContainer;