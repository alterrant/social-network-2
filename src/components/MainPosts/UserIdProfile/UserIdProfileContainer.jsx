import * as React from "react";
import UserIdProfile from "./UserIdProfile";
import {connect} from "react-redux";
import {loadUserProfile} from "../../../redux/mainBasicPage-reducer";
import Preloader from "../../common/Preloader/Preloader";

class UserIdProfileContainer extends React.Component {

  componentDidMount() {
    this.props.loadUserProfile(this.props.userId)
  }

  render() {
    console.log("RENDER")
    return (
        <>
          {(this.props.preloadStatus) ? <Preloader/> : null}
          <UserIdProfile fullName={this.props.fullName}
                         aboutMe={this.props.aboutMe}
                         contacts={this.props.contacts.github}
                         photos={this.props.photos}
                         userStatus={this.props.userStatus}/>
        </>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    fullName: store.mainBasicPage.userIdProfile.fullName,
    aboutMe: store.mainBasicPage.userIdProfile.aboutMe,
    contacts: store.mainBasicPage.userIdProfile.contacts,
    photos: store.mainBasicPage.userIdProfile.photos.large,
    userStatus: store.mainBasicPage.userIdProfileStatus,
    preloadStatus: store.usersPage.isFetch
  }
}

export default connect(mapStateToProps, {loadUserProfile})(UserIdProfileContainer);