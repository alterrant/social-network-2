import Post from "./Post/Post";
import MainStyle from './Main.module.css'
import Avatar from "./MyAvatar/MyAvatar";

function Main(props) {
    let myPost = [
        props.myPostsData.map( postData => <Post name={postData.name} say={postData.say}/>)
    ]

    return (
        <div className={MainStyle.main}>
            <Avatar/>
            { myPost }
        </div>
    );
}

export default Main;