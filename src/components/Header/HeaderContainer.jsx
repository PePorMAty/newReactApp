import React from "react";
import Header from "./Header"
import { connect } from "react-redux";
import { setAuthUserData, getHeader } from "../../redux/authReducer";

class HeaderContainerr extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getHeader()
  }
  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData, getHeader })(HeaderContainerr)
