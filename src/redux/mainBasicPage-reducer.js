const ADD_MY_POST_MESSAGE = 'ADD-MY-POST-MESSAGE';
const UPDATE_MY_POST_MESSAGE_TEXT_AREA = 'UPDATE-MY-POST-MESSAGE-TEXT-AREA'

const mainBasicReducer = (state, action) => {

  switch (action.type) {
    case 'ADD-MY-POST-MESSAGE':
      let myPostNewMessage = {
        id: '3', message: state.textMynewMessage, likes: '0'
      }
      state.messages.push(myPostNewMessage);
      state.textMynewMessage = '';
      return state;
    case 'UPDATE-MY-POST-MESSAGE-TEXT-AREA':
      state.textMynewMessage = action.updateMyPostNewTextMessage;
      return state;
    default:
      return state;
  }
}

export default mainBasicReducer;

export const addMyPostMessageActionCreator = () => ({type: ADD_MY_POST_MESSAGE})
export const updateMyPostMessageTextAreaActionCreator = (newMessageRefTextArea) => {
  return {type: UPDATE_MY_POST_MESSAGE_TEXT_AREA, updateMyPostNewTextMessage: newMessageRefTextArea}
}