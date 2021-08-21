import AddMessageStyle from './AddMessage.module.css';
import React from 'react';


function AddMessage() {

    const newMessage = React.createRef();
    const addMessage = () => {
        const textNewMessage = newMessage.current.value;
        alert(textNewMessage);
    }

    return (
        <div className={AddMessageStyle.textArea}>
            <div>
                <textarea name="textMessage" ref={newMessage} cols="50" rows="2" placeholder={'Написать сообщение'}></textarea>
            </div>
            <div>
                <button onClick={ addMessage }>
                    AddPost
                </button>
            </div>
        </div>
    )
}

export default AddMessage;