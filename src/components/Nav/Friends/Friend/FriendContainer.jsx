import {connect} from "react-redux";
import Friend from "./Friend";

const mapStateToProps = (state, ownProps) => {
  return {
    img: ownProps.img,
    name: ownProps.name
  }
}

const FriendContainer = connect(mapStateToProps)(Friend);

export default FriendContainer;