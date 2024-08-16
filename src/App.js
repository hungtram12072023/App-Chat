import './App.css';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';


function App() {
  return <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route Component={Login} path='/login'></Route>
        <Route Component={ChatRoom} path='/'></Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
}

export default App;
