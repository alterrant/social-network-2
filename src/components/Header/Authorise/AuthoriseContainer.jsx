import * as React from "react";
import Authorise from "./Authorise";
import {connect} from "react-redux";
import {logOut} from "../../../redux/auth";

class AuthoriseContainer extends React.Component {

  render() {
    return <Authorise {...this.props} logOut={this.props.logOut}/>
  }
}

const mapStateToProps = (state) => {
  return {
    icoAutorisedUser: state.auth.icoAutorisedUser,
    icoUnutorisedUser: state.auth.icoUnutorisedUser,
    authoriseStatus: state.auth.userData.authoriseStatus,
    authUserProfile: state.auth.authUserIdProfile,
  }
}

export default connect(mapStateToProps, {logOut})(AuthoriseContainer)