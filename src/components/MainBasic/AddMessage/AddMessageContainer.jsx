import React from 'react';
import {addNewMessageActionCreator, updateNewMessageTextAreaActionCreator} from "../../../redux/mainPostsPage-reducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";

const mapStateToProps = (state, ownProps) => {
    return {
        textNewMessage: state.mainPostsPage.textNewMessage,
        person: ownProps.person
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewMessage: () => {
            dispatch( addNewMessageActionCreator(ownProps.person) );
        },
        updateNewMessageTextArea: (newMessageRefTextArea) => {
            dispatch( updateNewMessageTextAreaActionCreator(newMessageRefTextArea) );
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;