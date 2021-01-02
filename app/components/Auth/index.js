import React, { useState } from 'react';
import { AuthProvider } from '../../contexts';

const initialState = {
  authenticated: false,
  user: {
    role: 'user',
  },
  accessToken: '',
};

export default props => {
  const [auth, setAuth] = useState(initialState);

  const initiateLogin = () => {};

  const logout = () => {
    setAuth(initialState);
  };

  const setSession = data => {
    const user = {};
    setAuth({
      authenticated: true,
      accessToken: data.accessToken,
      user,
    });
  };

  const handleAuthentication = () => {
    setSession({});
  };

  return (
    <AuthProvider
      value={{
        ...auth,
        initiateLogin,
        handleAuthentication,
        logout,
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </AuthProvider>
  );
};
