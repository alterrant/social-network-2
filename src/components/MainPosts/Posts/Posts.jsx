import Post from "./Post/Post";
import PostsStyle from './Posts.module.css'
import AddMyPostContainer from "./AddMyPost/AddMyPostContainer";

function Posts(props) {
    let myPost = [
        props.myPosts.myPosts.messages.map( postData => <Post img={props.myPosts.myPosts.img} message={postData.message}/>)
    ]
    return (
        <div className={PostsStyle.wrapper}>
            {myPost}
            <AddMyPostContainer store={props.store}/>
        </div>
    )
}

export default Posts;