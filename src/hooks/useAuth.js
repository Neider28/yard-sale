import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import { endPoints } from '@services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}  
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data: { access_token } } = await axios.post(endPoints.auth.login, { email, password }, options);
    
    if(access_token) {
      Cookie.set('token', access_token, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${access_token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  const signOut = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;

    router.push('/');    
  };

  return {
    user,
    signIn,
    error,
    setError,
    signOut
  };
};