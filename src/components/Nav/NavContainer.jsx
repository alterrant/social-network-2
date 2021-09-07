import {connect} from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state)  => {
  return {
    links: state.sitebar.links
  }
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;