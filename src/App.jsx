import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Messages } from './components/Pages/Messages/Messages';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Pages/Settings/Settings';
import { addPost } from './redux/state';


function App(props) {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="app__body">
        <NavBar />
        <div className="page__body">
          <Routes>
              <Route path='/profile' element={<Profile 
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />} />
              <Route path='/messages/*' element={<Messages 
                peoplesData={props.state.messagesPage.peoplesData}
                messagesData={props.state.messagesPage.messagesData}
                dispatch={props.dispatch}
              />} />
              <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
