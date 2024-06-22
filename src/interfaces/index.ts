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
  // onSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
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