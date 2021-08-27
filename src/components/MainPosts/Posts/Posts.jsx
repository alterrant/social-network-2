import Post from "./Post/Post";
import AddMyPost from "./AddMyPost/AddMyPost";
import PostsStyle from './Posts.module.css'

function Posts(props) {
    let myPost = [
        props.myPosts.myPosts.messages.map( postData => <Post img={props.myPosts.myPosts.img} message={postData.message}/>)
    ]
    return (
        <div className={PostsStyle.wrapper}>
            {myPost}
            <AddMyPost myPosts={props.myPosts.myPosts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Posts;