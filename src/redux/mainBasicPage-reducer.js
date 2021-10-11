import {authAPI, profileAPI, usersAPI} from "../api/api";
import {preload} from "./users-reducer";

const ADD_MY_POST_MESSAGE = 'ADD-MY-POST-MESSAGE';
const UPDATE_MY_POST_MESSAGE_TEXT_AREA = 'UPDATE-MY-POST-MESSAGE-TEXT-AREA'
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_USER_PROFILE_STATUS = 'GET_USER_PROFILE_STATUS';
const SET_MY_STATUS = 'SET_MY_STATUS';

let initialState = {
  myDescription: {
    img: 'https://yt3.ggpht.com/ytc/AAUvwnj_ISXCawqTq2rUIJvEASLiYXmoNCNbxKAp8AIDMz0=s900-c-k-c0x00ffffff-no-rj',
    description: 'I\'m Andrey the creator of this site. It\'s my first social network. This page is hosted ' +
        'on Git https://github.com/alterrant/social-network-2.git\nThank you for watching this and don\'t be mad on me.',
    myStatus: 'Learning React'
  },
  /*
  {
  "aboutMe": null,
  "contacts": {
    "facebook": null,
    "website": null,
    "vk": null,
    "twitter": null,
    "instagram": null,
    "youtube": null,
    "github": null,
    "mainLink": null
  },
  "lookingForAJob": false,
  "lookingForAJobDescription": null,
  "fullName": "IgorFrezer",
  "userId": 19787,
  "photos": {
    "small": null,
    "large": null
  }
}
   */
  // userIdProfile: null,
  userIdProfile: {
    fullName: '1',
    aboutMe: '2',
    contacts: {facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null},
    photos: {large:'4'},
    userStatus: ''
  },
  userIdProfileStatus: '',
  myPosts: {
    img: 'https://yt3.ggpht.com/ytc/AAUvwnj_ISXCawqTq2rUIJvEASLiYXmoNCNbxKAp8AIDMz0=s900-c-k-c0x00ffffff-no-rj',
    messages: [
      {id: '1', message: 'Hello world', likes: '15'},
      {id: '2', message: 'It\'s my first site', likes: '25'},
      {id: '3', message: 'I wanna have a god job', likes: '90'}
    ],
    textMynewMessage: ''
  }
}


const mainBasicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MY-POST-MESSAGE':
      let myPostNewMessage = {
        id: '3', message: state.myPosts.textMynewMessage, likes: '0'
      }
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          messages: [
              ...state.myPosts.messages,
              myPostNewMessage
          ],
          textMynewMessage: ''
        }
      }
    case 'UPDATE-MY-POST-MESSAGE-TEXT-AREA': {
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          textMynewMessage: action.updateMyPostNewTextMessage
        }
      }
    }
    case SET_MY_STATUS:
      return {...state, myDescription: {...state.myDescription, myStatus: action.status}}
    case GET_USER_PROFILE:
      return {...state, userIdProfile: action.userIdProfile}
    case GET_USER_PROFILE_STATUS:
      return {...state, userIdProfileStatus: action.userId}
    default:
      return state;
  }
}

export default mainBasicReducer;

export const addMyPostMessageActionCreator = () => ({type: ADD_MY_POST_MESSAGE})
export const updateMyPostMessageTextAreaActionCreator = (newMessageRefTextArea) => {
  return {type: UPDATE_MY_POST_MESSAGE_TEXT_AREA, updateMyPostNewTextMessage: newMessageRefTextArea}
}
export const setMyStatus = (status) => ({type: SET_MY_STATUS, status})

export const loadMyStatus = () => (dispatch) => {

  authAPI.auth()
      .then(receiveMyId => {
        return receiveMyId.data.data.id})
      .then(myId => {
        profileAPI.getProfileStatus(myId)
            .then(receivedMyStatus => {
              dispatch(setMyStatus(receivedMyStatus.data));
            })
      })
}

export const putMyStatus = (status) => (dispatch) => {
  profileAPI.setProfileStatus(status)
      .then(recevedStatus => {
        if (recevedStatus.data.resultCode === 0) dispatch(setMyStatus(status))
          }
      )
}


export const getUserProfile = (userIdProfile) => ({type: GET_USER_PROFILE, userIdProfile})
export const getUserProfileStatus = (userId) => ({type: GET_USER_PROFILE_STATUS, userId})
export const loadUserProfile = (userId) => (dispatch) => {
  preload(true)

  usersAPI.getProfile(userId)
      .then(received => {
            dispatch(getUserProfile(received));
          }
      )
  //сделал не через then, чтобы успевало прогрузиться
  profileAPI.getProfileStatus(userId)
      .then(receivedStatus => {
        dispatch(getUserProfileStatus(receivedStatus.data))
        preload(false)
      }
  )
}

