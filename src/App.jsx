import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Pages/Settings/Settings';
import { MessagesContainer } from './components/Pages/Messages/MessagesContainer';
import { UsersContainer } from './components/Pages/Users/UsersContainer';


function App(props) {
  
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="app__body">
        <NavBar />
        <div className="page__body">
          <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/messages/*' element={<MessagesContainer />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
