import React from 'react';
import UsersStyle from './UsersPage.module.css';
import UserContainer from "./User/UserContainer";
import {Paginator} from "../common/Paginator/Paginator";

const UsersPage = (props) => {

  let usersArr = props.users.map(user => <UserContainer user={user}/>);

  return (
      <>
        <div className={UsersStyle.wrapperStyle}>
          <div>
           <Paginator {...props}/>
          </div>
          <div className={UsersStyle.wrapper}>
            {usersArr}
          </div>
        </div>
      </>
  )
}

export default UsersPage;