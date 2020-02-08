import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';


export const useSubmit = () => {
  const serverUrl = 'http://localhost:3001';
  const cookies = new Cookies();
  const [, setToken] = useState(cookies.get('token') || null);


  const handleSubmit = async () => {
    const response = await axios.get(`${serverUrl}/api/login`);
    const { token } = response.data;
    cookies.set('token', token);
    setToken(token);
    await Router.push('/index');
  };

  return [handleSubmit];
};
