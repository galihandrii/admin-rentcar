import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Loginpage from './Pages/Loginpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Loginpage/>} />
    </Routes>
  );
}

export default App;
