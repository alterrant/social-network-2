import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        myPosts: state.mainBasicPage.myPosts
    }
}

export default connect(mapStateToProps)(Posts);