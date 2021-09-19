const ADD_MY_POST_MESSAGE = 'ADD-MY-POST-MESSAGE';
const UPDATE_MY_POST_MESSAGE_TEXT_AREA = 'UPDATE-MY-POST-MESSAGE-TEXT-AREA'

let initialState = {
  myDescription: {
    img: 'https://yt3.ggpht.com/ytc/AAUvwnj_ISXCawqTq2rUIJvEASLiYXmoNCNbxKAp8AIDMz0=s900-c-k-c0x00ffffff-no-rj',
    description: 'I\'m Andrey the creator of this site. It\'s my first social network. This page is hosted ' +
        'on Git https://github.com/alterrant/social-network-2.git\nThank you for watching this and don\'t be mad on me.'
  },
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
    default:
      return state;
  }
}

export default mainBasicReducer;

export const addMyPostMessageActionCreator = () => ({type: ADD_MY_POST_MESSAGE})
export const updateMyPostMessageTextAreaActionCreator = (newMessageRefTextArea) => {
  return {type: UPDATE_MY_POST_MESSAGE_TEXT_AREA, updateMyPostNewTextMessage: newMessageRefTextArea}
}