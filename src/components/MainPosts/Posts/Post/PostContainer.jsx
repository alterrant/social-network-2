import {connect} from "react-redux";
import Post from "./Post";

const mapStateToProps = (state, ownProps) => {
  return {
    img: state.mainBasicPage.myPosts.img,
    message: ownProps.message
  }
}

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;