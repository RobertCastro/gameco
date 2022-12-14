import React, { useState } from 'react';
import Router from 'next/router';

function Login() {
  let loginData;


  if (typeof window !== 'undefined') {
    loginData = JSON.parse(localStorage.getItem('loginData'));
  }

  if (loginData && loginData.enterprise) {
    redirectToAdmin()
  }

  async function redirectToAdmin() {
    Router.push("/admin");
  }

  const [clientUser, setClientUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const chanelToken = process.env.CHANEL_TOKEN;

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(process.env.API_URL)
    try {
      const response = await fetch(process.env.API_URL, {
        method: 'POST',
        body: JSON.stringify({ chanelToken, clientUser, passwordUser }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();

      // guardar los datos en el almacenamiento local del navegador
      localStorage.setItem('loginData', JSON.stringify(data));
      Router.push('/admin');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
        <div className="mb-8 flex justify-center">
          <img className="w-24" src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <label className="bg-gray-200" htmlFor="clientUser">
            Usuario:
            <input
              type="text"
              id="clientUser"
              value={clientUser}
              onChange={(e) => setClientUser(e.target.value)}
              className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
            />
          </label>

          <label htmlFor="passwordUser">
            Contraseña:
            <input
              type="password"
              id="passwordUser"
              value={passwordUser}
              onChange={(e) => setPasswordUser(e.target.value)}
            />
          </label>

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}
export default Login;