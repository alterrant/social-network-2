import SubscribeButton from "./SubscribeButton";
import {connect} from "react-redux";
import {userSubscriberAC} from "../../../../redux/users-reducer";

const mapStateToProps = (state, ownProps) => {
  return {
    subscribeStatus: ownProps.subscribeStatus.userStatus,
    userId: ownProps.subscribeStatus.id
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeSubscribe: (userId) => dispatch(userSubscriberAC(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeButton)