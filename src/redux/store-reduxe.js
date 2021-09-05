import {combineReducers, createStore} from "redux";
import mainBasicReducer from "./mainBasicPage-reducer";
import mainPostsReducer from "./mainPostsPage-reducer";
import siterbarReducer from "./sitebar-reducer";

let reducers = combineReducers({
  mainBasicPage: mainBasicReducer,
  mainPostsPage: mainPostsReducer,
  sitebar: siterbarReducer
})

let store = createStore(reducers);

export default store;