import React from 'react';
import {addNewMessageActionCreator, updateNewMessageTextAreaActionCreator} from "../../../redux/mainPostsPage-reducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";

const mapStateToProps = (state, person) => {
    return {
        textNewMessage: state.mainPostsPage.textNewMessage,
        person: person
    }
}
const mapDispatchToProps = (dispatch, person) => {
    return {
        addNewMessage: () => {
            dispatch( addNewMessageActionCreator(person) );
        },
        updateNewMessageTextArea: (newMessageRefTextArea) => {
            dispatch( updateNewMessageTextAreaActionCreator(newMessageRefTextArea) );
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;