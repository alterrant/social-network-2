import AddMessageStyle from './AddMyPost.module.css';
import React from 'react';

function AddMyPost(props) {

    const addMyPostMessage = () => {
        props.addMyPostMessage();
    }

    const updateNewMessageTextArea = (e) => {
        let newMessageRefTextArea = e.target.value;
        props.updateNewMessageTextArea(newMessageRefTextArea);
    }
    /*console.log(props.myPosts)*/
    return (
        <div className={AddMessageStyle.textArea}>
            <div>
                <textarea className={AddMessageStyle.text} onChange={updateNewMessageTextArea}
                          name="textMessage"
                          cols="50"
                          rows="2"
                          placeholder={'Написать сообщение'}
                          value={props.myPosts}/>
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