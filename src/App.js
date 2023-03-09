import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Loginpage from './Pages/Loginpage';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './hoc/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Loginpage/>} />
      <Route element={<ProtectedRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
