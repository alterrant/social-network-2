import React from 'react';
import {
  addMyPostMessageActionCreator,
  updateMyPostMessageTextAreaActionCreator,
} from "../../../../redux/mainBasicPage-reducer";
import AddMyPost from "./AddMyPost";

function AddMyPostContainer(props) {
  let state = props.store.getState();

  const addMyPostMessage = () => {
    props.store.dispatch(addMyPostMessageActionCreator());
  }

  const updateNewMessageTextArea = (newMessageRefTextArea) => {
    props.store.dispatch(updateMyPostMessageTextAreaActionCreator(newMessageRefTextArea));
  }
  return <AddMyPost addMyPostMessage={addMyPostMessage}
                    updateNewMessageTextArea={updateNewMessageTextArea}
                    myPosts={state.mainBasicPage.myPosts.textMynewMessage}/>
}

export default AddMyPostContainer;