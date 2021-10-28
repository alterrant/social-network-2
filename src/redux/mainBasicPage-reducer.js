import {profileAPI, usersAPI} from "../api/api";
import {preload} from "./users-reducer";

const ADD_MY_POST_MESSAGE = 'SOCIAL-NETWORK/MAIN-BASIC-PAGE/ADD-MY-POST-MESSAGE';
const GET_USER_PROFILE = 'SOCIAL-NETWORK/MAIN-BASIC-PAGE/GET_USER_PROFILE';
const GET_USER_PROFILE_STATUS = 'SOCIAL-NETWORK/MAIN-BASIC-PAGE/GET_USER_PROFILE_STATUS';
const SET_MY_STATUS = 'SOCIAL-NETWORK/MAIN-BASIC-PAGE/SET_MY_STATUS';

let initialState = {
  myDescription: {
    img: 'https://yt3.ggpht.com/ytc/AAUvwnj_ISXCawqTq2rUIJvEASLiYXmoNCNbxKAp8AIDMz0=s900-c-k-c0x00ffffff-no-rj',
    description: 'I\'m Andrey the creator of this site. It\'s my first social network. This page is hosted ' +
        'on Git https://github.com/alterrant/social-network-2.git\nThank you for watching this and don\'t be mad on me.',
    myStatus: 'Learning React'
  },
  userIdProfile: {
    fullName: '1',
    aboutMe: '2',
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
    photos: {large: '4'},
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
    case ADD_MY_POST_MESSAGE:
      let myPostNewMessage = {
        id: '3', message: action.myNewPost, likes: '0'
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

export const addMyPostMessage = (myNewPost) => ({type: ADD_MY_POST_MESSAGE, myNewPost})
export const setMyStatus = (status) => ({type: SET_MY_STATUS, status})

export const loadMyStatus = (myId) => async (dispatch) => {
  let receivedMyStatus = await profileAPI.getProfileStatus(myId);
  dispatch(setMyStatus(receivedMyStatus.data));
}

export const putMyStatus = (status) => async (dispatch) => {
  const receivedStatus = await profileAPI.setProfileStatus(status);
  if (receivedStatus.data.resultCode === 0) dispatch(setMyStatus(status));
}


export const getUserProfile = (userIdProfile) => ({type: GET_USER_PROFILE, userIdProfile})
export const getUserProfileStatus = (userId) => ({type: GET_USER_PROFILE_STATUS, userId})
export const loadUserProfile = (userId) => async (dispatch) => {
  preload(true);

  const received = await usersAPI.getProfile(userId);
  dispatch(getUserProfile(received));

  const receivedStatus = await profileAPI.getProfileStatus(userId);
  dispatch(getUserProfileStatus(receivedStatus.data));

  preload(false);
}

