import UserInfoContainer from "./UserInfo/UserInfoContainer";
import UserStyle from './User.module.css'
import SubscribeButtonContainer from "./SubscribeStatus/SubscribeButtonContainer";

function User(props) {
  return (
      <div className={UserStyle.wrapper}>
        <div className={UserStyle.status_wrapper}>
          <img className={UserStyle.ava} src={(props.img)? null : 'https://avatars.mds.yandex.net/get-zen_doc/1586459/pub_5dbe960978125e00b080ef3c_5dbe966a8f011100ad33c13a/scale_1200'} alt='ava'/>
          <SubscribeButtonContainer subscribeStatus={props.user}/>
        </div>
        <UserInfoContainer userDescription={props.user}/>
      </div>
  )
}

export default User;
