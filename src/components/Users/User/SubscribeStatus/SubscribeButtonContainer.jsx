import SubscribeButton from "./SubscribeButton";
import {connect} from "react-redux";
import * as React from "react";
import {following, unfollowing} from "../../../../redux/users-reducer";

class subscribe extends React.Component {
  follow = () => {
    this.props.following(this.props.userId);
  }
  unfollow = () => {
    this.props.unfollowing(this.props.userId);
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
                            subscribeStatus={this.props.subscribeStatus}
                            followingUsers={this.props.followingUsers}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subscribeStatus: ownProps.subscribeStatus.followed,
    userId: ownProps.subscribeStatus.id,
    followingUsers: state.usersPage.followingUsers
  }
}

export default connect(mapStateToProps, {following, unfollowing})(subscribe)