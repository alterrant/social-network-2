import {connect} from "react-redux";
import {MyAvatar} from "./MyAvatar";
import {loadMyStatus, putMyStatus, setMyStatus} from "../../../redux/mainBasicPage-reducer";
import * as React from "react";

class MyAvatarContainer extends React.Component {

  componentDidMount() {
    this.props.loadMyStatus(this.props.myId)
  }

  render() {
    return (
      <MyAvatar {...this.props}/>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    img: store.mainBasicPage.myDescription.img,
    description: store.mainBasicPage.myDescription.description,
    myStatus: store.mainBasicPage.myDescription.myStatus,
    myId: store.auth.userData.userId
  }
}

export default connect(mapStateToProps, {loadMyStatus, setMyStatus, putMyStatus})(MyAvatarContainer);

