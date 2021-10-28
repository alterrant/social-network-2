import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import mainBasicReducer from "./mainBasicPage-reducer";
import mainPostsReducer from "./mainPostsPage-reducer";
import siterbarReducer from "./sitebar-reducer";
import usersReducer from "./users-reducer";
import auth from "./auth";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
  mainBasicPage: mainBasicReducer,
  mainPostsPage: mainPostsReducer,
  sitebar: siterbarReducer,
  usersPage: usersReducer,
  auth: auth,
  form: formReducer,
  app: appReducer
})

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//window.store = store;

export default store;