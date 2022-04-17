import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chat from './pages/Chat';
import SignInOutContainer from './containers/SignInOutContainer';

function App() {
  return (
      
      <Routes>
        <Route path='/' element={<SignInOutContainer/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
     
  );
}

export default App;
