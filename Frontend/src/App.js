import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';
import SignInOutContainer from './containers/SignInOutContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignInOutContainer/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
