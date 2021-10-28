import {connect} from "react-redux";
import Post from "./Post";

const mapStateToProps = (state, ownProps) => {
  return {
    img: state.mainBasicPage.myPosts.img,
    message: ownProps.message
  }
}

export default connect(mapStateToProps)(Post);