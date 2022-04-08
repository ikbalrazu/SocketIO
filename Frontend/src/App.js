import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chat from './pages/Chat';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
