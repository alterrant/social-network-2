import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const AUTHORISE = 'SOCIAL-NETWORK/AUTH/AUTHORISE';
const SET_AUTH = 'SOCIAL-NETWORK/AUTH/SET_AUTH';
const GET_AUTH_USER_PROFILE = 'SOCIAL-NETWORK/AUTH/GET_AUTH_USER_PROFILE';

let initialState = {
  icoAutorisedUser: 'https://e7.pngegg.com/pngimages/247/564/png-clipart-computer-icons-user-profile-user-avatar-blue-heroes.png',
  icoUnutorisedUser: 'https://w7.pngwing.com/pngs/51/541/png-transparent-computer-icons-font-awesome-lock-multi-factor-authentication-information-lock-miscellaneous-information-technology-computer-science.png',
  messages: 'You are not authorised',
  userData: {
    authoriseStatus: null,
    email: null,
    userId: null,
    login: null
  },
  authUserIdProfile: {
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    fullName: null,
    photos: {large: null}
  },
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORISE:
      return {
        ...state, userData: {
          ...state.userData,
          authoriseStatus: action.authoriseStatus
        }
      }
    case SET_AUTH:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.data
        }
      }
    case GET_AUTH_USER_PROFILE:
      return {...state, authUserIdProfile: action.authUserIdProfile}
    default:
      return state
  }
}

export default auth;

export const authorise = (authoriseStatus) => ({type: AUTHORISE, authoriseStatus})
export const setAuth = (email, userId, login) => ({type: SET_AUTH, data: {email, userId, login}})
export const getAuthUserProfile = (authUserIdProfile) => ({type: GET_AUTH_USER_PROFILE, authUserIdProfile})

export const setAuthUserAndProfile = () => async (dispatch) => {
  const response = await usersAPI.auth();

  if (response.data.resultCode === 0) {
    let {email, id, login} = response.data.data;

    dispatch(authorise(true));
    dispatch(setAuth(email, id, login));

    const authProfile = await usersAPI.getProfile(id);
    dispatch(getAuthUserProfile(authProfile));

    return response
  }
  dispatch(authorise(false));
  dispatch(setAuth(null, null, null))
}

export const logIn = (email, password) => async (dispatch) => {
  let response = await authAPI.logIn(email, password);

  if (response.data.resultCode === 0) {
    dispatch(authorise(true));
  } else {
    dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
  }
}

export const logOut = () => async (dispatch) => {
  let response = await authAPI.logOut()

  if (response.data.resultCode === 0) {
    dispatch(authorise(false));
    dispatch(setAuth(null, null, null))
  }
}