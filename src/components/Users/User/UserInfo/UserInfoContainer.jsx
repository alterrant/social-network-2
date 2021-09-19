import {connect} from "react-redux";
import UserInfo from "./UserInfo";

const mapStateToProps = (state, ownProps) => {
  return {
    userName: ownProps.name
    // закоментировано, чтобы не рушилась логика с API
    //userName: ownProps.userDescription.userInformation.name,
    // userPrescription: ownProps.userDescription.userInformation.prescription,
    // userCountry: ownProps.userDescription.location.country,
    // userCity: ownProps.userDescription.location.city
  }
}

export default connect(mapStateToProps)(UserInfo);
