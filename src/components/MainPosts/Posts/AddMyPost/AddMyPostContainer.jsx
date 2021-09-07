import React from 'react';
import AddMyPost from "./AddMyPost";
import {connect} from "react-redux";
import {
  addMyPostMessageActionCreator,
  updateMyPostMessageTextAreaActionCreator
} from "../../../../redux/mainBasicPage-reducer";

const mapStateToProps = (state) => {
  return {
    myPosts: state.mainBasicPage.myPosts.textMynewMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMyPostMessage: () => dispatch(addMyPostMessageActionCreator()),
    updateNewMessageTextArea: newMessageRefTextArea => dispatch(updateMyPostMessageTextAreaActionCreator(newMessageRefTextArea))
  }
}

const AddMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddMyPost);

export default AddMyPostContainer;