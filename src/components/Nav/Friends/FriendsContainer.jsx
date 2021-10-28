import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) =>{
  return {
    friends: state.sitebar.friends
  }
}

export default connect(mapStateToProps)(Friends);