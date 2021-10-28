import React from 'react';
import {addNewMessage} from "../../../redux/mainPostsPage-reducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";

const AddMessageContainer = ({addNewMessage, person}) => {

  let addMessage = (formData) => {
    addNewMessage(person, formData.addMessageDialog)
  }

  return (
      <AddMessage onSubmit={addMessage}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    person: ownProps.person
  }
}

export default connect(mapStateToProps, {addNewMessage})(AddMessageContainer)
