import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Footer from '../../Footer/Footer';

const { SubMenu } = Menu;

function HomePage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const menuItems = [
    {
      label: <NavLink to="/login">Iniciar Sesión</NavLink>,
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: <NavLink to="/Signup">Registrarse</NavLink>,
      key: '2',
      icon: <TeamOutlined />,
    },
  ];

  // const onLogin = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //     const user = userCredential.user;
  //     navigate('/admin');
  //     console.log(user)
  //   }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage)
  //   })
  // }

  const onClickMenu = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <div>
                  {/* Website Logo */}
                  <a href="#" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-sm md:text-lg">
                      ASIRIS
                    </span>
                  </a>
                </div>
              </div>
              {/* Secondary Navbar items */}
              <div className="md:flex items-center md:space-x-3">
                <Menu
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ flex: 'auto', minWidth: 0 }}
                  items={menuItems}
                  onClick={onClickMenu}
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex-grow">
          <div className="max-w-4xl mx-auto py-16">
            <h1 className="text-5xl font-bold text-center text-gray-700 mb-4">
              No importa de qué es tú Restaurante, ASIRIS te ayuda
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
              Asistente para tu Restaurante con Inteligencia Artificial
            </p>
            <div className="flex justify-center">
              <button className="rounded-full text-lg bg-blue-500 text-white py-2 px-4 mr-4 hover:bg-blue-400">
                Contactar a Ventas
              </button>
              <NavLink to="/signup">
                <button className="rounded-full text-lg border-2 border-blue-500 text-blue-500 py-2 px-4 hover:bg-blue-100">
                  Registrarse
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <main >
        <section>
          <div>
            <p className="text-3xl font-bold underline"> FocusApp </p>

            <form>
              <div>
                <label htmlFor="email-address">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  onClick={onLogin}
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? {' '}
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </p>

          </div>
        </section>
      </main> */}
    </>
  );
}

export default HomePage;
