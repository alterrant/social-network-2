import AddMessageStyle from './AddMyPost.module.css';
import React from 'react';
import {Field} from "redux-form";
import {inputText} from "../../../common/FormControl/input";
import {required, maxLength} from "../../../../utils/validators/validator";

const maxLength20 = maxLength(5);

function AddMyPost(props) {

  return (
      <div className={AddMessageStyle.textArea}>
        <div>
          <form onSubmit={props.handleSubmit}>
            <div>
              <Field component={inputText} validate={[maxLength20, required]} placeholder={'Написать сообщение'} autoComplete={'off'} name={'addMyPost'}/>
            </div>
            <div>
              <button>
                Add post
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddMyPost;