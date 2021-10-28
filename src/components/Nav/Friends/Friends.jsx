import FriendsStyle from './Friends.module.css'
import FriendContainer from "./Friend/FriendContainer";

function Friends({friends}) {
    const friendItem = [
        friends.map( friendItem => <FriendContainer key={friendItem.name} name={friendItem.name} img={friendItem.img}/>)
    ]

    return (
        <div>
            <h3>
                Friends
            </h3>
            <div className={FriendsStyle.wrapper}>
                { friendItem }
            </div>
        </div>
    )
}

export default Friends;