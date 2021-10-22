import React from 'react';
import {connect} from "react-redux";
import {addMyPostMessage} from "../../../../redux/mainBasicPage-reducer";
import {reduxForm} from "redux-form";
import AddMyPost from "./AddMyPost";

const AddMyPostContainer = (props) => {

  let addMyPost = (value) => {
    props.addMyPostMessage(value.addMyPost)
  }

  return (
      <AddMyPostForm onSubmit={addMyPost}/>
  )
}

const AddMyPostForm = reduxForm({form: 'addMyPost'})(AddMyPost)

const mapStateToProps = (state) => {
  return {
    myPosts: state.mainBasicPage.myPosts.textMynewMessage
  }
}

export default connect(mapStateToProps, {addMyPostMessage})(AddMyPostContainer);