import {connect} from "react-redux";
import Friend from "./Friend";

const mapStateToProps = (state, ownProps) => {
  return {
    img: ownProps.img,
    name: ownProps.name
  }
}

export default connect(mapStateToProps)(Friend);