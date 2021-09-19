import User from "./User";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    // закоментировано, чтобы не рушилась логика с API
    //img:ownProps.user.userInformation.img,
    user: ownProps.user
  }
}

export default connect(mapStateToProps)(User)

