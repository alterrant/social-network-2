import reportWebVitals from './reportWebVitals';
import React from 'react';
import state, {addMessage, subscribe, updateNewTextMessage} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} updateNewTextMessage={updateNewTextMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
//Порядок функций rerenderEntireTree(state) и  subscribe(rerenderEntireTree) ни на что не влияем (пока)
rerenderEntireTree(state);
subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
