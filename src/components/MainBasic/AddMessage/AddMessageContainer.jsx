import React from 'react';
import {addNewMessageActionCreator, updateNewMessageTextAreaActionCreator} from "../../../redux/mainPostsPage-reducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";

const mapStateToProps = (state, ownProps) => {
    /*console.log(state)*/
    //Тут мы изменили state
    return {
        textNewMessage: state.mainPostsPage.textNewMessage,
        person: ownProps.person
    }
    /*console.log(state)*/
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewMessage: () => {
            dispatch( addNewMessageActionCreator(ownProps.person) );
        },
        updateNewPostMessageTextArea: (newMessageRefTextArea) => {
            dispatch( updateNewMessageTextAreaActionCreator(newMessageRefTextArea) );
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;