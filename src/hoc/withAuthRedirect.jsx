import {Redirect} from "react-router-dom";
import * as React from "react";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    authorised: state.auth.userData.authoriseStatus
})

export const WithAuthRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.authorised) return <Redirect to={'/login'}/>
      return <Component {...this.props}/>;
    }
  }

  return connect(mapStateToPropsRedirect)(RedirectComponent);
}