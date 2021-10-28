import {connect} from "react-redux";
import MessageBy from "./MessageBy";

const mapStateToProps = (state, ownProps) => {
  return {
    messageBy: ownProps.messageBy,
    name: ownProps.name
  }
}

export default connect(mapStateToProps)(MessageBy)