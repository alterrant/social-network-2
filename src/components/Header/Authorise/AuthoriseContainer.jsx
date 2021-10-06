import * as React from "react";
import Authorise from "./Authorise";
import {connect} from "react-redux";
import {setAuthUserAndProfile} from "../../../redux/auth";

class AuthoriseContainer extends React.Component {
  componentDidMount() {

    this.props.setAuthUserAndProfile(this.props.authoriseStatus);
  }

  render() {
    return (
        <Authorise {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    icoAutorisedUser: state.auth.icoAutorisedUser,
    icoUnutorisedUser: state.auth.icoUnutorisedUser,
    authoriseStatus: state.auth.authoriseStatus,
    authUserProfile: state.auth.authUserIdProfile,
  }
}

export default connect(mapStateToProps, {setAuthUserAndProfile})(AuthoriseContainer)