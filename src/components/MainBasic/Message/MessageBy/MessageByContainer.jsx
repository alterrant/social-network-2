import {connect} from "react-redux";
import MessageBy from "./MessageBy";

const mapStateToProps = (state, ownProps) => {
  return {
    messageBy: ownProps.messageBy,
    name: ownProps.name
  }
}

const MessageByContainer = connect(mapStateToProps)(MessageBy)

export default MessageByContainer;
