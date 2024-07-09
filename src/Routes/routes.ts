export type RoutePath = {
  login: string;
  register: string;
  mainpage: string;
  cryptocurrencies: string;
  cryptoDetails: string;
};

export const ROUTES: RoutePath =  {
  login: '/login',
  register: '/register',
  mainpage: '/',
  cryptocurrencies: '/cryptocurrencies',
  cryptoDetails: '/crypto/:uuid'
};