import AvatarStyle from "../MyAvatar/MyAvatar.module.css";
import UserInfoStyle from "../../Users/User/UserInfo/UserInfo.module.css";

const UserIdProfile = (props) => {
  return (
      <div className={AvatarStyle.wrapper}>
        <div>
          {(props.photos) ? <img src={props.photos} alt="myAvatar"/>
              :
              <img src={'https://vraki.net/sites/default/files/inline/images/10_342.jpg'} alt="myAvatar"/>}

        </div>
        <div className={UserInfoStyle.wrapper}>
          <div>{props.fullName}</div>
          <div>{(props.aboutMe) ? props.aboutMe : 'No information about user'}</div>
          <div>{props.contacts ? props.contacts : 'No information about his contacts'}</div>
        </div>
      </div>
  )
}
export default UserIdProfile