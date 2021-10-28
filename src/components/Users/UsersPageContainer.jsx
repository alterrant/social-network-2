import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {changeCurrentPage, loadUsers} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersPageContainerAPI extends React.Component {

  componentDidMount() {
    this.props.loadUsers(this.props.pageSize, this.props.currentPage)
  }

  setCurrentPage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    this.props.loadUsers(this.props.pageSize, pageNumber)
  }

  render() {
    return (
        <>
          {(this.props.preloadStatus) ?
              <Preloader/>
              :
              <UsersPage users={this.props.users}
                         totalCount={this.props.totalCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         setCurrentPage={this.setCurrentPage}/>}

          {/* {(this.props.preloadStatus) ? <Preloader/> : null}
          <UsersPage users={this.props.users}
                     totalCount={this.props.totalCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     setCurrentPage={this.setCurrentPage}/>*/}
        </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    preloadStatus: state.usersPage.isFetch
  }
}

export default connect(mapStateToProps, {
  changeCurrentPage,
  loadUsers
})(UsersPageContainerAPI);