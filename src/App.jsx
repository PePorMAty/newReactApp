import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Settings } from './components/Pages/Settings/Settings';
import { MessagesContainer } from './components/Pages/Messages/MessagesContainer';
import { UsersContainer } from './components/Pages/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';


function App(props) {
  
  return (
    <BrowserRouter>
    <div className="app">
        <HeaderContainer />
      <div className="app__body">
        <NavBar />
        <div className="page__body">
          <Routes>
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


export default App;
