import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profileReducer"
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


export function withRouter(Component) {
  return (props) => {
    const match = { params: useParams() };
    return <Component {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 24674;
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidUpdate(prevProps) {
    let userId = this.props.match.params.userId
    if (prevProps.match.params.userId !== userId) {
      userId = 24674
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    }
  }

  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)