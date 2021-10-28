import {setAuthUserAndProfile} from "./auth";

const SET_INITIALIZE_SUCCESS = 'SOCIAL-NETWORK/APP-REDUCER/SET_INITIALIZE_SUCCESS';


let initialState = {
  isInitialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE_SUCCESS:
      return {...state,
        isInitialized: true}
    default:
      return state;
  }
}

export default appReducer;

export const successInitializing = () => ({type: SET_INITIALIZE_SUCCESS})
export const initializeApp = () => async (dispatch) => {
  let promise = dispatch(setAuthUserAndProfile())

  await Promise.all([promise]);
  dispatch(successInitializing())
}
