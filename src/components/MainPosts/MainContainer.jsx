import Main from "./Main";
import {Redirect, withRouter} from "react-router-dom";
import * as React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

class MainContainer extends React.Component {

  render() {
    if (!this.props.authorised) return <Redirect to={'/login'}/>

    return <Main {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    authorised: state.auth.authoriseStatus
  }
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(MainContainer);