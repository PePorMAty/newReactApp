import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
} from "../../redux/profileReducer"

import { useParams } from 'react-router-dom'
import { profileAPI } from "../../api/api";
export function withRouter(Component) {
  return (props) => {
    
    const match = { params: useParams() };
    return <Component {...props} match={match} />
  }
} 

class ProfileContainer extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate(prevProps) {
    let userId = this.props.match.params.userId
    if (prevProps.match.params.userId !== userId) {
      userId = 24674
      profileAPI.getProfile(userId).then(data => {
        this.props.setUserProfile(data)
      })
    }
  }
  componentDidMount(){
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = 24674;
    }
    profileAPI.getProfile(userId).then(data => {
      this.props.setUserProfile(data)
    })
  }
  
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{
  setUserProfile
})(WithUrlDataContainerComponent)