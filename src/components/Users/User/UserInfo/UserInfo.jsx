import UserInfoStyle from './UserInfo.module.css'

function UserInfo(props) {
  return (
      <div className={UserInfoStyle.wrapper}>
        <div className={UserInfoStyle.wrapper_user_info}>
          <div>{(props.userName)? props.userName : 'APIUser'}</div>
          <div className={UserInfoStyle.wrapper_user_location}>
            <div>{props.userCountry}</div>
            <div>{props.userCity}</div>
          </div>
        </div>
        <div>{props.userPrescription}</div>
      </div>
  )
}

export default UserInfo;