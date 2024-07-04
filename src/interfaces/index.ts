export interface ReusableInputProps {
  label:string;
  value: string | number;
  name:string;
  id:string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;


}
export interface SubmitButtonProps {
  text:string;
  className:string
  onClick?: any ;
}
export interface LoginForm {
  email: string;
  password: string;
}
export interface RegisterForm{
  email: string;
  password: string;
  confirmpassword:string;
  btcaddress:string | number;
}
export interface CryptocurrenciesProps {
  simplified:any;
  
}
export interface Coin {
  id: string;
  name: string;
  price: number;
  marketCap: number;
  change: number;
  iconUrl: string;
  rank: number;
}