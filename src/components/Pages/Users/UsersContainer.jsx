import React from "react"
import Users from "./Users"
import {
  follow,
  unFollow,
  setCurrentPage,
  getUsers
} from "../../../redux/usersReducer"
import { connect } from "react-redux"
import { Preloader } from "../../common/Preloader/Preloader"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"

class UsersAPIContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged(pageNumber) {
    
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {
        this.props.isFetching ? <Preloader /> : <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged.bind(this)}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      }
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export const UsersContainer = compose(
  connect(mapStateToProps, {
    follow, unFollow,
    setCurrentPage,
    getUsers
  }),
)(UsersAPIContainer)
