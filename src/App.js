import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//import { AuthProvider } from './Auth';
import AuthButton from './AuthButton';

function App() {
  return (
    <>
      <AuthButton />
      <div>
        <h1>Bookkeeper!</h1>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
          <Link to='/invoices'>Invoces</Link>|{" "}
          <Link to='/expenses'>Expenses</Link>|{" "}
          <Link to='/protected'>Protected</Link>|{" "}
          <Link to='/login'>Login</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
