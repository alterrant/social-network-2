import AvatarStyle from './MyAvatar.module.css'
import * as React from "react";
import {useState} from "react";

export const MyAvatar = (props) => {

  let [switchStatus, setSwitchStatus] = useState(false);
  let [myStatus, setMyStatus] = useState(props.myStatus);

  const toggle = () => {
    setSwitchStatus(!switchStatus);

    if (switchStatus) props.putMyStatus(myStatus)
  }

  const changeStatus = (e) => {
    setMyStatus(e.currentTarget.value)
  }


  return (
      <div className={AvatarStyle.wrapper}>
        <img src={props.img} alt="myAvatar"/>
        <div>
          <p>{props.description}</p>
          <div>
            {(!switchStatus)
                ?
                <div>
                  <span onDoubleClick={toggle}>{props.myStatus || 'Haven\'t status'}</span>
                </div>
                :
                <div>
                  <input autoFocus={true} onChange={changeStatus} onBlur={toggle} value={myStatus}/>
                </div>
            }
          </div>
        </div>
      </div>
  )
}
