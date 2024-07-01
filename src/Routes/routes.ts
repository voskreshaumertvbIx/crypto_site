import Login from "../components/login/login";
export type RoutePath = {
  
  login: string;
  register: string;
  mainpage:string;
};

export const ROUTES: RoutePath =  {
  
  login : '/login',
  register: '/register',
  mainpage: '/'
}