import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logout from '../components/Logout';


const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataUser, setDataUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    if (loginData) {
      setIsLoggedIn(true);
      console.log(loginData)
      setDataUser(loginData.enterprise[0].enterpriseDesc);
    } else {
      router.push('/login');
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <p>{dataUser}</p>
        <Logout />
      </div>
    )
  } else {
    return null;
  }
};

export default Admin;