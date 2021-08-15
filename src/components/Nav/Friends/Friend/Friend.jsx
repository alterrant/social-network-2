import FriendStyle from './Friend.module.css'

function Friend(prop) {
    return (
        <div className={FriendStyle.wrapper}>
            <img src={prop.img} alt="avaOfFriend"/>
            {prop.name}
        </div>
    )
}

export default Friend;