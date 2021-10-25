import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const AUTHORISE = 'SOCIAL-NETWORK/AUTH/AUTHORISE';
const SET_AUTH = 'SOCIAL-NETWORK/AUTH/SET_AUTH';
const GET_AUTH_USER_PROFILE = 'SOCIAL-NETWORK/AUTH/GET_AUTH_USER_PROFILE';

let initialState = {
  icoAutorisedUser: 'https://e7.pngegg.com/pngimages/247/564/png-clipart-computer-icons-user-profile-user-avatar-blue-heroes.png',
  icoUnutorisedUser: 'https://w7.pngwing.com/pngs/51/541/png-transparent-computer-icons-font-awesome-lock-multi-factor-authentication-information-lock-miscellaneous-information-technology-computer-science.png',
  authoriseStatus: null,
  messages: 'You are not authorised',
  //можно authoriseStatus засунуть в userData
  userData: {
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
      return {...state, authoriseStatus: action.authoriseStatus}
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

export const setAuthUserAndProfile = () => (dispatch) => {
  return usersAPI.auth()
      .then((received) => {
            if (received.data.resultCode === 0) {

              let {email, id, login} = received.data.data;

              dispatch(authorise(true));
              dispatch(setAuth(email, id, login));

              usersAPI.getProfile(id)
                  .then((authProfile) => {
                    dispatch(getAuthUserProfile(authProfile));
                  })

              return received
            }
            dispatch(authorise(false));
            dispatch(setAuth(null, null, null))
          }
      )
}

export const logIn = (email, password) => (dispatch) => {
  authAPI.logIn(email, password).then((responce) => {
        if (responce.data.resultCode === 0) {
          dispatch(authorise(true));
        } else {
          dispatch(stopSubmit('login', {_error: responce.data.messages[0]}));
        }
      }
  )
}

export const logOut = () => (dispatch) => {
  authAPI.logOut()
      .then((responce) => {
            if (responce.data.resultCode === 0) {
              dispatch(authorise(false));
              dispatch(setAuth(null, null, null))
            }
          }
      )
}