import * as React from "react";
import Authorise from "./Authorise";
import {connect} from "react-redux";
import {authorise, getAuthUserProfile, setAuth} from "../../../redux/auth";
import {usersAPI} from "../../../api/api";

class AuthoriseContainer extends React.Component {
  componentDidMount() {
    usersAPI.auth()
        .then((received) => {
              if (received.data.resultCode === 0) {
                this.props.authorise(true);
                let {email, id, login} = received.data.data;
                this.props.setAuth(email, id, login);
                return received
              }
              return received
            }
        )
        .then((received) => {
          if (this.props.authoriseStatus) usersAPI.getProfile(received.data.data.id).then((received) => {
            this.props.getAuthUserProfile(received.data)
          })
        })
  }


  render() {
    return (
        <Authorise {...this.props}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    icoAutorisedUser: state.auth.icoAutorisedUser,
    icoUnutorisedUser: state.auth.icoUnutorisedUser,
    authoriseStatus: state.auth.authoriseStatus,
    authUser: state.auth.userData,
    authUserProfile: state.auth.authUserIdProfile
  }
}

export default connect(mapStateToProps, {authorise, setAuth, getAuthUserProfile})(AuthoriseContainer)