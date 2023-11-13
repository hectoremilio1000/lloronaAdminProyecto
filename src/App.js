import logo from './logo.svg';
import './App.css';
import ListaProductos from './componentes/ListaProductos/ListaProductos';
import { Button } from 'antd';
import HomePage from './componentes/HomePage/HomePage';
import Admin from './componentes/Admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
