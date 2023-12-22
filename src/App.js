import logo from './logo.svg';
import './App.css';
// import ListaProductos from './componentes/ListaProductos/ListaProductos';
import { Button } from 'antd';
import HomePage from './componentes/HomePage/HomePage';
import Admin from './componentes/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Signup from './componentes/Signup/Signup';
import Login from './componentes/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
