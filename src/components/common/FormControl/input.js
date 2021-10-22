import React from "react";
import inputStyle from './input.module.css'

export const inputText = ({meta, input, ...props}) => {
  const conditionError = meta.touched && meta.error;
  return (
      <>
        <div className={inputStyle.inputArea + " " + (conditionError ? inputStyle.error : "")}>
          <input {...props} {...input}/>
        </div>
        <div className={inputStyle.error}>
          {conditionError && meta.error}
        </div>
      </>
  )
}