import React from "react";
import Header from "./Header"
import { connect } from "react-redux";
import { setAuthUserData} from "../../redux/authReducer";
import { logout } from "../../redux/authReducer";


class HeaderContainerr extends React.Component {

  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData, logout })(HeaderContainerr)
