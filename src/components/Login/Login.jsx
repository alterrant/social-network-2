import {Field, reduxForm} from "redux-form";
import * as React from "react";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/auth";
import {email} from "../../utils/validators/validator";
import {inputText} from "../common/FormControl/input";
import {Redirect} from "react-router-dom";

const LoginField = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field component={inputText} validate={email} placeholder={'Email'} name={'email'}/>
        <Field component={inputText} placeholder={'Password'} name={'password'} type={'password'}/>
        <Field component={"input"} type="checkbox" name={'rememberLogin'}/><span>Remember Me</span>
        <div>
          <div>
            {props.error}
          </div>
          <button disabled={props.isAuth}>
            {props.title}
          </button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginField)

const LoginFieldContainer = (props) => {

  const onSubmit = (formData) => {
    if (formData.email && formData.password) props.logIn(formData.email, formData.password)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  } else {
    return (
        <>
          <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={onSubmit} isAuth={props.isAuth} title={'Login'}/>
        </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.userData.authoriseStatus,
  }
}

export default connect(mapStateToProps, {logIn, logOut})(LoginFieldContainer)