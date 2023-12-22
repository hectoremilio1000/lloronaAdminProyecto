import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Button, Form, Input, message } from 'antd';
import NavBar from '../../NavBar/NavBar';

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const auth = getAuth();
  // console.log(auth);
  const onFinish = async (values) => {
setPassword(values.password)
    setEmail(values.email)
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        // console.log(user)
        message.success('usuario creado con exito')
        navigate('/login')
      })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
  }

  

  return (
    <div className='max-w' >

          <NavBar />
        <div className='max-w-sm mx-auto items-center'>
        <p className='py-2'>Regístrate</p>
        <Form onFinish={onFinish}
          >
          <Form.Item label="Email" name="email" rules={[
            {
              required: "true",
              
              }
            ]}>
              
              
                <Input/>
          </Form.Item>
          <Form.Item label="Contraseña" name="password" rules={[{
            required:"true"
          }]}>           
                <Input/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit"
              >
                Regístrarme
            </Button>
          </Form.Item>
          </Form>

            <p>
              Ya tienes cuenta?{' '}
              <NavLink to="/login" >
                Ingresa
              </NavLink>
          </p>
        </div>
         
      
      
    </div>
  )
}

export default Signup