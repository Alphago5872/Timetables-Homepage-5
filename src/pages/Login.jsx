import React, { useContext } from 'react';

import Login from '../components/Login/Login/Login';
import Home from './Home';
import HeaderWebsite from '../components/Wrapper-Components/Wrapper-1/HeaderWebsite_1';
import AuthContext from '../components/Login/Store/auth-context';

function Logins() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <HeaderWebsite />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default Logins;
