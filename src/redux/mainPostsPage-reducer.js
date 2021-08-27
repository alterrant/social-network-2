const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

const mainPostsReducer = (state, action) => {

  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMessage = {
        id: '6', name: 'me', message: state.textNewMessage
      }
      state.messagesData[action.newMessage].push(newMessage);
      state.textNewMessage = '';
      return state;
    case 'UPDATE-NEW-TEXT-MESSAGE':
      state.textNewMessage = action.updateNewTextMessage;
      return state;
    default:
      return state;
  }
}

export default mainPostsReducer;

export const addNewMessageActionCreator = (somePerson) => ({type: ADD_MESSAGE, newMessage: somePerson});
export const updateNewMessageTextAreaActionCreator = (newMessageRefTextArea) => {
  return {type: UPDATE_NEW_TEXT_MESSAGE, updateNewTextMessage: newMessageRefTextArea}
}