import React from 'react';
import {addNewMessage} from "../../../redux/mainPostsPage-reducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";
import {reduxForm} from "redux-form";

const AddMessageContainer = (props) => {

  let addMessage = (formData) => {
    props.addNewMessage(props.person, formData.addMessageDialog)
  }
  return (
      <AddMessageContainerForm onSubmit={addMessage}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    person: ownProps.person
  }
}

const AddMessageContainerForm = reduxForm({form: 'Dialog'})(AddMessage)

export default connect(mapStateToProps, {addNewMessage})(AddMessageContainer)