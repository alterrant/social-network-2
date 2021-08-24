import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import {addMessage, updateNewTextMessage} from './redux/state'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} updateNewTextMessage={updateNewTextMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}