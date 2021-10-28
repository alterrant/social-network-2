const ADD_MESSAGE = 'SOCIAL-NETWORK/MAIN-POST-PAGE/ADD-MESSAGE';

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
    case ADD_MESSAGE:
      let newMessage = {
        id: '6', name: 'me', message: action.newMessageText
      }
      return {
        ...state,
        messagesData: {
          ...state.messagesData,
          [action.newMessagePerson]: [
            ...state.messagesData[action.newMessagePerson],
            newMessage]
        }
      }
    default:
      return state;
  }
}

export default mainPostsReducer;

export const addNewMessage = (somePerson, newMessageText) => ({
  type: ADD_MESSAGE,
  newMessagePerson: somePerson,
  newMessageText
});