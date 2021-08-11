import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let myPostsData = [
    {id: '0', name: 'Vasya: ', say: 'Hi', likes: '0'},
    {id: '1', name: 'Nikita: ', say: 'Fuck you', likes: '15'}
]
let personsData = [
    {id: '1', name: 'persona1'},
    {id: '2', name: 'persona2'},
    {id: '3', name: 'persona3'}
]
let messagesData = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'}
]

ReactDOM.render(
    <React.StrictMode>
        <App myPostsData={myPostsData} personsData={personsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
