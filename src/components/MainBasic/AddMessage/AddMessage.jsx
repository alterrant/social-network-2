import AddMessageStyle from './AddMessage.module.css';
import React from 'react';

function AddMessage(props) {

    const addNewMessage = () => {
        props.addNewMessage(props.person);
    }

    const updateNewMessageTextArea = (e) => {
        let newMessageRefTextArea = e.target.value;
        props.updateNewMessageTextArea(newMessageRefTextArea);
    }
    return (
        <div className={AddMessageStyle.textArea}>
            <div>
                <textarea className={AddMessageStyle.text} onChange={updateNewMessageTextArea}
                          name="textMessage"
                          cols="50"
                          rows="2"
                          placeholder={'Написать сообщение'}
                          value={props.textNewMessage}/>
            </div>
            <div>
                <button onClick={addNewMessage}>
                    AddPost
                </button>
            </div>
        </div>
    )
}

export default AddMessage;