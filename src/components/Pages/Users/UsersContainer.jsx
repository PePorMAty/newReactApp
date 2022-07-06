import React from "react"
import * as axios from "axios"
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalCount,
  setIsFetching
} from "../../../redux/usersReducer"
import { connect } from "react-redux"
import Users from "./Users"
import { Preloader } from "../../common/Preloader/Preloader"

class UsersAPIContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.totalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
      });
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
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
    isFetching: state.usersPage.isFetching
  }
}
/* const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount))
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    }
  }
} */

export const UsersContainer = connect(mapStateToProps, {
  follow, unfollow, setUsers,
  setCurrentPage, setTotalCount, setIsFetching
})(UsersAPIContainer)
