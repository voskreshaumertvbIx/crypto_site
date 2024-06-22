import React, { useState } from 'react';
import ReusableInput from '../../reusable_component/auth_input/auth_input';
import AuthBackground from '../../reusable_component/auth_background/auth_background';
import Logo from '../logo/logo';
import SubmitButton from '../../reusable_component/button/submit_button';
import { RegisterForm } from '../../interfaces';

const InitialState: RegisterForm = {
  email: '',
  password: '',
  confirmpassword: '',
  btcaddress: '',
};

const Register = () => {
  const [value, setFormValue] = useState<RegisterForm>(InitialState);
  const { email, password, confirmpassword, btcaddress } = value;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!email || !password || !confirmpassword) {
      console.log('Required fields are missing');
      return;
    }
    if (password !== confirmpassword) {
      console.log('Passwords do not match');
      return;
    }
    setFormValue(InitialState);
    console.log('Form submitted', value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AuthBackground />
      <div className="absolute top-1/4 left-1/2 w-1/4 text-text_color font-semibold">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex justify-start mb-8">
            <Logo />
            <h1 className="text-font_section_header ml-1">Crypto</h1>
          </div>
          <ReusableInput
            id="email"
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
          />
          <ReusableInput
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <ReusableInput
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm password"
            type="password"
            value={confirmpassword}
            onChange={handleChange}
          />
          <ReusableInput
            id="btcaddress"
            name="btcaddress"
            label="BTC Address (Optional)"
            value={btcaddress}
            onChange={handleChange}
          />
          <div className='mt-[50px]'>
            <SubmitButton className='' text="Sign up" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

