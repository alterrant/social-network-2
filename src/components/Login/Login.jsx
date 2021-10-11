import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import * as React from "react";

const LoginField = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          {/*<label>LoginLabel</label>*/}
          <Field component={"input"} placeholder={'Email'} name={'email'}/>

        </div>
        <div>
          {/*<label>PasswordLabel</label>*/}
          <Field component={"input"} placeholder={'Password'} name={'password'}/>
        </div>
        <div>
          <Field component={"input"} type="checkbox" name={'rememberLogin'}/><span>Remember Me</span>
        </div>
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginField)

export default class LoginFieldContainer extends React.Component {

  onSubmit(formData) {
    if(formData.email && formData.password) {
      authAPI.logIn(formData.email, formData.password)
    }
  }

  render() {
    return (
        <>
          <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={this.onSubmit}/>
        </>
    )
  }
}