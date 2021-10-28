import Main from "./Main";
import {withRouter} from "react-router-dom";
import * as React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirect";

class MainContainer extends React.Component {

  render() {
    return <Main {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    authorised: state.auth.userData.authoriseStatus
  }
}

export default compose(
    withRouter,
    //WithAuthRedirectComponent,
    connect(mapStateToProps)
)(MainContainer);