import SubscribeButton from "./SubscribeButton";
import {connect} from "react-redux";
import * as React from "react";
import {userSubscriber} from "../../../../redux/users-reducer";
import {usersAPI} from "../../../../api/api";

class subscribe extends React.Component {
  follow = () => {
    usersAPI.follow(this.props.userId);
    this.props.userSubscriber(this.props.userId)
  }

  unfollow = () => {
    usersAPI.unfollow(this.props.userId);
    this.props.userSubscriber(this.props.userId);
  }

  render() {
    if (this.props.subscribeStatus) {
      return (
          <SubscribeButton subscribe={this.unfollow}
                           {...this.props}/>
      )
    }
    return <SubscribeButton subscribe={this.follow}
                            userId={this.props.userId}
                            subscribeStatus={this.props.subscribeStatus}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subscribeStatus: ownProps.subscribeStatus.followed,
    userId: ownProps.subscribeStatus.id
  }
}

export default connect(mapStateToProps, {userSubscriber})(subscribe)