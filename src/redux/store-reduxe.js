import {applyMiddleware, combineReducers, createStore} from "redux";
import mainBasicReducer from "./mainBasicPage-reducer";
import mainPostsReducer from "./mainPostsPage-reducer";
import siterbarReducer from "./sitebar-reducer";
import usersReducer from "./users-reducer";
import auth from "./auth";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  mainBasicPage: mainBasicReducer,
  mainPostsPage: mainPostsReducer,
  sitebar: siterbarReducer,
  usersPage: usersReducer,
  auth: auth
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;