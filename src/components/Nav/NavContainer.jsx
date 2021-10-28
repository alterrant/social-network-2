import {connect} from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state)  => {
  return {
    links: state.sitebar.links
  }
}

export default connect(mapStateToProps)(Nav);