import {connect} from "react-redux";
import * as React from "react";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import MainBasic from "./MainBasic";
import {compose} from "redux";

class MainBasicContainer extends React.Component {
  render() {
    return <MainBasic {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    personsData: state.mainPostsPage.personsData
  }
}

export default compose(
    connect(mapStateToProps),
    WithAuthRedirectComponent
)(MainBasicContainer);