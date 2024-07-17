import React from 'react';
import { ROUTES } from './routes';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/login';
import Register from '../components/register/register';
import Landing from '../page/Landing/landing';
import Cryptocurrencies from '../components/cryptocurrencies/cryptocurrencies';
import CryptoDetails from '../components/crypto_details/crypto_details';
import CryptoStats from '../page/CryptoStats/сryptoStats';
import CryptoNews from '../components/crypto_news/crypto_news';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.mainpage} element={<Landing />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.register} element={<Register />} />
      <Route path={ROUTES.cryptocurrencies} element={<CryptoStats/>} />
      <Route path={ROUTES.cryptoDetails} element={<CryptoDetails />} />
      <Route path={ROUTES.news}  element={<CryptoNews/>}/>

    </Routes>
  );
}

export default AppRoutes;
