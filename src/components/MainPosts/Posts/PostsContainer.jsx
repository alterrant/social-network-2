import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        myPosts: state.mainBasicPage.myPosts
    }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;