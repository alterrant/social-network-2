import React from 'react';
import UsersStyle from './UsersPage.module.css';
import UserContainer from "./User/UserContainer";

const UsersPage = (props) => {

  let usersArr = props.users.map(user => <UserContainer user={user}/>);
  let maxPages = Math.ceil(props.totalCount / props.pageSize);
  let numberPages = [];
  if (maxPages > 20) maxPages = 10;
  for (let i = 1; i <= maxPages; i++) {
    numberPages.push(<span className={props.currentPage === i && UsersStyle.currentPage} onClick={() => {
      props.setCurrentPage(i)
    }}>{i}</span>)
  }

  return (
      <>
        <div className={UsersStyle.wrapperStyle}>
          <div>
            {numberPages}
          </div>
          <div className={UsersStyle.wrapper}>
            {usersArr}
          </div>
        </div>
      </>
  )
}

export default UsersPage;