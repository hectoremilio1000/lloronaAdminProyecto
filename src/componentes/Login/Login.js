import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

  const navigate = useNavigate();


  const auth = getAuth();

  const onFinish = async (values) => {

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password).then((userCredential) => {
        const user = userCredential.user
        console.log(user);
        navigate('/admin')
      })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    }
  
    
  };

  return (
    <div className='contenedorLogin'>
      <NavBar />
      <div className='max-w-sm mx-auto py-4'>
      <p className='p'>Iniciar sesión</p>
      <Form 
        onFinish={onFinish}
          className='py-4'
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit">
            Entrar
          </Button>
        </Form.Item>
      </Form>
      <p >¿No tienes cuenta?
      <NavLink to="/signup"> <span className='text-blue-700'>Regístrate</span> </NavLink></p>
      </div>
</div>
  )
}

export default Login