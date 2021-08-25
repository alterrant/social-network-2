import AddMessageStyle from './AddMessage.module.css';
import React from 'react';

function AddMessage(prop) {
    const newMessageRef = React.createRef();

    const addNewMessage = () => {
        prop.dispatch( {type: 'ADD-MESSAGE', newMessage: prop.person} );
    }

    const updateNewMessageTextArea = () => {
        let newMessageRefTextArea = newMessageRef.current.value;
        prop.dispatch( {type: 'UPDATE-NEW-TEXT-MESSAGE', updateNewTextMessage: newMessageRefTextArea} );
    }

    return (
        <div className={AddMessageStyle.textArea}>
            <div>
                <textarea className={AddMessageStyle.text} onChange={updateNewMessageTextArea}
                          name="textMessage"
                          ref={newMessageRef}
                          cols="50"
                          rows="2"
                          placeholder={'Написать сообщение'}
                          value={prop.textNewMessage}/>
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