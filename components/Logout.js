import Router from 'next/router';

const Logout = () => {
  const handleLogout = () => {
    // Borramos el dato de inicio de sesión de localStorage
    localStorage.removeItem('loginData');
    // Redirigimos al usuario a la página de inicio de sesión
    Router.push('/login');
  };

  return (
    <button onClick={handleLogout}>Cerrar sesión</button>
  );
};

export default Logout;
