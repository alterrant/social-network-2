const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE =  'UPDATE-NEW-TEXT-MESSAGE';

let store = {
    _state: {
        mainBasicPage: {
            myPostsData: [
                {id: '0', name: 'Vasya: ', say: 'Hi', likes: '0'},
                {id: '1', name: 'Nikita: ', say: 'Fuck you', likes: '15'}
            ]
        },
        mainPostsPage: {
            personsData: [
                {id: '1', name: 'persona1', img: 'https://yt3.ggpht.com/ytc/AAUvwniM0SeQQ5jFJMBSs_j01PNZOaWfFhYYM6wxNidW=s900-c-k-c0x00ffffff-no-rj'},
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
        },
        sitebar: {
            links: ['profile', 'message', 'news', 'music', 'settings'],
            friends: [
                {
                    id: 1,
                    name: 'person1',
                    img: 'https://vsthemes.org/uploads/posts/2018-11/1581998424_epic-space_vsthemes_ru-45.jpg'
                },
                {
                    id: 2,
                    name: 'person2',
                    img: 'https://vsthemes.org/uploads/posts/2018-11/1581998424_epic-space_vsthemes_ru-45.jpg'
                },
                {
                    id: 3,
                    name: 'person3',
                    img: 'https://vsthemes.org/uploads/posts/2018-11/1581998424_epic-space_vsthemes_ru-45.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('sdfadfs')
    },
    dispatch(action) {
        if (action.type === 'GET-STATE') {
            return this._state
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: '6', name: 'me', message: this._state.mainPostsPage.textNewMessage
            }
            this._state.mainPostsPage.messagesData[action.newMessage].push(newMessage);
            this._state.mainPostsPage.textNewMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
            this._state.mainPostsPage.textNewMessage = action.updateNewTextMessage;
            this._callSubscriber(this._state);
            console.log(this._state.mainPostsPage.textNewMessage);
        } else if (action.type === 'SUBSCRIBE') {
            this._callSubscriber = action.observe;
        }
    }
}
export const addNewMessageActionCreator = (somePerson) => ({type: ADD_MESSAGE, newMessage: somePerson});
export const updateNewMessageTextAreaActionCreator = (newMessageRefTextArea) => {
    return {type: UPDATE_NEW_TEXT_MESSAGE, updateNewTextMessage: newMessageRefTextArea}
}

export default store;
