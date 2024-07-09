import React from 'react';
import { ROUTES } from './routes';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/login';
import Register from '../components/register/register';
import Landing from '../page/Landing/landing';
import Cryptocurrencies from '../components/cryptocurrencies/cryptocurrencies';
import CryptoDetails from '../components/crypto_details/crypto_details';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.mainpage} element={<Landing />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.register} element={<Register />} />
      <Route path={ROUTES.cryptocurrencies} element={<Cryptocurrencies simplified={false} />} />
      <Route path={ROUTES.cryptoDetails} element={<CryptoDetails />} />
    </Routes>
  );
}

export default AppRoutes;
