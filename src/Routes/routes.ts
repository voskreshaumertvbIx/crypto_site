export type RoutePath = {
  login: string;
  register: string;
  mainpage: string;
  cryptocurrencies: string;
  cryptoDetails: string;
  news: string;
};

export const ROUTES: RoutePath =  {
  login: '/login',
  register: '/register',
  mainpage: '/',
  cryptocurrencies: '/cryptocurrencies',
  cryptoDetails: '/crypto/:uuid',
  news:'news',
};