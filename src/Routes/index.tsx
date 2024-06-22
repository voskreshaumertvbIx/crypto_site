import React from 'react';
import { ROUTES } from './routes';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/login';
import Register from '../components/register/register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.register} element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
