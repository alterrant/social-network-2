import Friend from "./Friend/Friend";
import FriendsStyle from './Friends.module.css'

function Friends(prop) {

    const friendItem = [
        prop.friends.map( friendItem => <Friend name={friendItem.name} img={friendItem.img}/>)
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