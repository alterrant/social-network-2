import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {setUsersAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}
// реализована логика с API
// export default connect(mapStateToProps)(UsersPage);

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);