import React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '../common/LoginForm/LoginForm'
import s from "./Login.module.css"
import { login, logout } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

const Login = (props) => {

  const onSubmit = (values, { setStatus }) => {


  props.login(values.email, values.password, values.rememberMe, setStatus);

  setStatus()
  // setStatus это метод в формике. он связан с Status в дальнейшем. 
}

  if(props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1 className={s.title}>Login</h1>
      <div className={s.login__form}>
        <LoginForm login={props.login} onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);