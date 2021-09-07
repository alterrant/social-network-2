import {connect} from "react-redux";
import MainBasic from "./MainBasic";

const mapStateToProps = (state) => {
  return {
    personsData: state.mainPostsPage.personsData
  }
}

const MainBasicContainer = connect(mapStateToProps)(MainBasic);

export default MainBasicContainer;