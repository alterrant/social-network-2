const AUTHORISE = 'AUTHORISE';
const SET_AUTH = 'SET_AUTH';
const GET_AUTH_USER_PROFILE = 'GET_AUTH_USER_PROFILE';

let initialState = {
  icoAutorisedUser: 'https://e7.pngegg.com/pngimages/247/564/png-clipart-computer-icons-user-profile-user-avatar-blue-heroes.png',
  icoUnutorisedUser: 'https://w7.pngwing.com/pngs/51/541/png-transparent-computer-icons-font-awesome-lock-multi-factor-authentication-information-lock-miscellaneous-information-technology-computer-science.png',
  authoriseStatus: false,
  messages: 'You are not authorised',
  userData: {
    email: null,
    userId: null,
    login: null
  },
  authUserIdProfile: {
    aboutMe: '2',
    contacts: {facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null},
    fullName: '1',
    photos: {large: null}
  },
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORISE:
      return {...state, authoriseStatus: action.authoriseStatus}
    case SET_AUTH:
      return {...state,
      userData: {...state.userData,
      ...action.data}}
    case GET_AUTH_USER_PROFILE:
      return {...state, authUserIdProfile: action.authUserIdProfile}
      //return {...state}
    default:
      return state
  }
}

export default auth;

export const authorise = (authoriseStatus) => ({type: AUTHORISE, authoriseStatus})
export const setAuth = (email, userId, login) => ({type: SET_AUTH, data:{email, userId, login}})
export const getAuthUserProfile = (authUserIdProfile) => ({type: GET_AUTH_USER_PROFILE, authUserIdProfile})