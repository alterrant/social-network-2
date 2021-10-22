import {setAuthUserAndProfile} from "./auth";

const SET_INITIALIZE_SUCCESS = 'SET_INITIALIZE_SUCCESS';


let initialState = {
  isInitialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE_SUCCESS:
      return {...state,
        isInitialized: true}
    default:
      return state
  }
}

export default appReducer;

export const successInitializing = () => ({type: SET_INITIALIZE_SUCCESS})
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuthUserAndProfile())

  Promise.all([promise])
      .then(() => {
        dispatch(successInitializing())
      })
}