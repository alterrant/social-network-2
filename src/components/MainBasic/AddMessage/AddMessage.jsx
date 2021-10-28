import AddMessageStyle from './AddMessage.module.css';
import React from 'react';
import {Field, reduxForm} from "redux-form";

function AddMessage({handleSubmit}) {
    return (
        <div className={AddMessageStyle.textArea}>
          <form onSubmit={handleSubmit}>
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

export default reduxForm({form: 'Dialog'})(AddMessage);