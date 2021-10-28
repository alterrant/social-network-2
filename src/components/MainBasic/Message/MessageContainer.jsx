import Message from "./Message";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        personsMessage: state.mainPostsPage.messagesData[ownProps.persona]
    }
}

export default connect(mapStateToProps)(Message);