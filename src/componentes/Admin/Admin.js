import React, {useState, useEffect} from 'react'
import { Table } from 'antd';
import { firestore } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';

function Admin() {

  const [productos, setProductos] = useState([]);



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
  return (
    <div>Admin</div>
  )
}

export default Admin