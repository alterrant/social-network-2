import UserContainer from "./User/UserContainer";
import UsersStyle from './UsersPage.module.css'
import * as axios from "axios";

function UsersPage (props) {
  if(props.users.length === 0)
   axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(function (response) {
        debugger
        props.setUsers( response.data.items );
      })
      ;

  let usersArr = props.users.map( user => <UserContainer user={user} /> )
  return (
        <div className={UsersStyle.wrapper}>
          {usersArr}
        </div>
  )
}
export default UsersPage;