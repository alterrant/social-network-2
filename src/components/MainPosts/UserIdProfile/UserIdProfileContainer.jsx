import * as React from "react";
import UserIdProfile from "./UserIdProfile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/mainBasicPage-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {preload} from "../../../redux/users-reducer";
import {usersAPI} from "../../../api/api";

class UserIdProfileContainer extends React.Component {

  componentDidMount() {
    this.props.preload(true)
    /*
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
        .then(response => {
              this.props.getUserProfile(response.data);
              this.props.preload(false)
            }
        )
     */

    usersAPI.getProfile(this.props.userId)
        .then(response => {
              this.props.getUserProfile(response.data);
              this.props.preload(false)
            }
        )
  }

  render() {
    return (
        <>
          {(this.props.preloadStatus) ? <Preloader/> : null}
          <UserIdProfile fullName={this.props.fullName}
                         aboutMe={this.props.aboutMe}
                         contacts={this.props.contacts.github}
                         photos={this.props.photos}/>
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
    preloadStatus: store.usersPage.isFetch
  }
}

export default connect(mapStateToProps, {getUserProfile, preload})(UserIdProfileContainer);