import React, {useState, useEffect} from 'react'
import { Button, Table, message } from 'antd';
import { firestore } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Imagenes from '../Imagenes/Imagenes';

function Admin() {

  const [productos, setProductos] = useState([]);


  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerProductos = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'productos'));
      const productosArray = [];
      querySnapshot.forEach((doc) => {
        productosArray.push({ ...doc.data(), key: doc.id });
      });
      setProductos(productosArray);
    };
    obtenerProductos();
  }, []);

  console.log(productos);

  const SignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
      message.success('sesión finalizada');
    })
  }
  return (
    <>
    <NavBar/>
      <div>Admin</div>
      <Imagenes/>
      <Button onClick={SignOut}>Salir</Button>
      <Footer/>
    </>
  )
}

export default Admin