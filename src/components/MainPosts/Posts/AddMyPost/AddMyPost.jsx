import AddMessageStyle from './AddMyPost.module.css';
import React from 'react';
import {
  addMyPostMessageActionCreator,
  updateMyPostMessageTextAreaActionCreator,
} from "../../../../redux/state";

function AddMyPost(prop) {

    const addMyPostMessage = () => {
        prop.dispatch( addMyPostMessageActionCreator() );
    }

    const updateNewMessageTextArea = (e) => {
        let newMessageRefTextArea = e.target.value;
        prop.dispatch( updateMyPostMessageTextAreaActionCreator(newMessageRefTextArea) );
    }

    return (
        <div className={AddMessageStyle.textArea}>
            <div>
                <textarea className={AddMessageStyle.text} onChange={updateNewMessageTextArea}
                          name="textMessage"
                          cols="50"
                          rows="2"
                          placeholder={'Написать сообщение'}
                          value={prop.myPosts.textMynewMessage}/>
            </div>
            <div>
                <button onClick={addMyPostMessage}>
                    AddPost
                </button>
            </div>
        </div>
    )
}

export default AddMyPost;