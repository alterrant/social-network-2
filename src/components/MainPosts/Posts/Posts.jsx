import PostsStyle from './Posts.module.css'
import AddMyPostContainer from "./AddMyPost/AddMyPostContainer";
import PostContainer from "./Post/PostContainer";

function Posts(props) {
    debugger
    let myPost = [
        props.myPosts.messages.map( postData => <PostContainer message={postData.message}/>)
    ]
    return (
        <div className={PostsStyle.wrapper}>
            {myPost}
            <AddMyPostContainer />
        </div>
    )
}

export default Posts;