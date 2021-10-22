import AddMessageStyle from './AddMessage.module.css';
import React from 'react';
import {Field} from "redux-form";

function AddMessage(props) {

    return (
        <div className={AddMessageStyle.textArea}>
          <form onSubmit={props.handleSubmit}>
            <div>
              <Field component={'input'} name={'addMessageDialog'} placeholder={'Написать сообщение'} autoComplete="off"/>
            </div>
            <div>
              <button>
                Add post
              </button>
            </div>
          </form>
        </div>
    )
}

export default AddMessage;