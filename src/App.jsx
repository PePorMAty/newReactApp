import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Settings } from './components/Pages/Settings/Settings';
import { MessagesContainer } from './components/Pages/Messages/MessagesContainer';
import { UsersContainer } from './components/Pages/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';


function App(props) {

  useEffect(() => { props.initializeApp() }, []);

    if(!props.initialized){
      return <Preloader />
    }
  
    return (
      <BrowserRouter>
        <div className="app">
          <HeaderContainer />
          <div className="app__body">
            <NavBar />
            <div className="page__body">
              <Routes>
                <Route path='' element={<ProfileContainer />} />
                <Route path='/profile/' element={<ProfileContainer />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/messages/*' element={<MessagesContainer />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }


const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, {
    initializeApp,
  }),
  withRouter,
)(App)