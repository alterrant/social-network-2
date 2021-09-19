const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
  personsData: [
    {
      id: '1',
      name: 'persona1',
      img: 'https://yt3.ggpht.com/ytc/AAUvwniM0SeQQ5jFJMBSs_j01PNZOaWfFhYYM6wxNidW=s900-c-k-c0x00ffffff-no-rj'
    },
    {id: '2', name: 'persona2', img: 'https://sun9-70.userapi.com/c856120/v856120656/1940bd/bKV0GPv_pzw.jpg'},
    {id: '3', name: 'persona3', img: 'https://www.meme-arsenal.com/memes/036d20221d40a1c5582564755bd0effb.jpg'}
  ],
  messagesData: {
    persona1: [
      {id: '1', name: 'me', message: 'messageMe'},
      {id: '2', name: 'persona', message: 'messagePersona1'},
      {id: '3', name: 'me', message: 'messageMe'},
      {id: '4', name: 'persona', message: 'messagePersona1'},
      {id: '5', name: 'persona', message: 'messagePersona1'}
    ],
    persona2: [
      {id: '1', name: 'persona', message: 'messagePersona2'},
      {id: '2', name: 'me', message: 'messageMe'},
      {id: '3', name: 'persona', message: 'messagePersona2'},
    ],
    persona3: [
      {id: '1', name: 'persona', message: 'messagePersona3'},
      {id: '2', name: 'me', message: 'messageMe'},
      {id: '3', name: 'me', message: 'messageMe'},
      {id: '4', name: 'me', message: 'messageMe'},
      {id: '5', name: 'persona', message: 'messagePersona3'}
    ]
  },
  textNewMessage: ''
}
const mainPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMessage = {
        id: '6', name: 'me', message: state.textNewMessage
      }
      return {
        ...state,
        messagesData: {
          ...state.messagesData,
          [action.newMessage]: [
            ...state.messagesData[action.newMessage],
            newMessage
          ]
        },
        textNewMessage: ''
      }
    case 'UPDATE-NEW-TEXT-MESSAGE':
      return {
        ...state,
        textNewMessage: action.updateNewTextMessage
      }
    default:
      return state;
  }
}

/*
* const mainBasicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MY-POST-MESSAGE': {
      let stateCopy = JSON.parse(JSON.stringify(state));
      let myPostNewMessage = {
        id: '3', message: stateCopy.myPosts.textMynewMessage, likes: '0'
      }
      stateCopy.myPosts.messages.push(myPostNewMessage);
      stateCopy.myPosts.textMynewMessage = '';
      return stateCopy;
    }
    case 'UPDATE-MY-POST-MESSAGE-TEXT-AREA': {
      let stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.myPosts.textMynewMessage = action.updateMyPostNewTextMessage;
      return stateCopy;
    }
    default:
      return state;
  }
}
* */

export default mainPostsReducer;

export const addNewMessageActionCreator = (somePerson) => ({type: ADD_MESSAGE, newMessage: somePerson});
export const updateNewMessageTextAreaActionCreator = (newMessageRefTextArea) => {
  return {type: UPDATE_NEW_TEXT_MESSAGE, updateNewTextMessage: newMessageRefTextArea}
}