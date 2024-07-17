import React, { useState } from 'react';
import ReusableInput from '../../reusable_component/auth_input/auth_input';
import AuthBackground from '../../reusable_component/auth_background/auth_background';
import Logo from '../logo/logo';
import SubmitButton from '../../reusable_component/button/submit_button';
import { RegisterForm } from '../../interfaces';
import { ROUTES } from '../../Routes/routes';
import { FaHandHoldingHeart } from 'react-icons/fa';
import styles from './../login/style.module.css'
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
       <div className={styles.container}>
      <div className="text-text_color font-semibold p-[80px]">
        <form
          onSubmit={handleSubmit}
          className="w-[]  mx-auto p-[30px] flex flex-col lg:flex-row items-center bg-[#F9E6E6] rounded-2xl shadow-xl"
        >
          <div className="w-[448px]">
            <div className="flex justify-start mb-8">
              <Logo />
              <h1 className="text-font_section_header ml-1">Crypto</h1>
            </div>
            <div className="flex flex-col ">
              <h2 className="font-bold text-font_subhead">Register now</h2>
            </div>
     
          <ReusableInput
          placeholder='Email'
            id="email"
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
          />
          <ReusableInput
          placeholder='Password'
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <ReusableInput
          placeholder='Confirm password'
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm password"
            type="password"
            value={confirmpassword}
            onChange={handleChange}
          />
          <ReusableInput
          placeholder='Enter BTC adress'
            id="btcaddress"
            name="btcaddress"
            label="BTC Address (Optional)"
            value={btcaddress}
            onChange={handleChange}
          />
          <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                onChange={handleChange}
                className="hidden peer"
              />
              <label
                htmlFor="rememberMe"
                className="w-4 h-4 rounded cursor-pointer flex items-center justify-center mr-2"
                style={{
                  backgroundColor: "white",
                }}
              ></label>
              <div className=" text-font_small flex justify-between items-center w-full mt-1">
                <div className="">Remember me</div>
                
              </div>
            </div>
            <button className="w-full bg-[#474BCA] h-[47px] text-white text-font_large rounded-[5px] mt-4">Create an account</button>
          </div>
          <img
            className="m-auto ml-[100px]"
            src="./img/login.png"
            alt="Login"
          />
        </form>
      </div>
    </div>
      </> 
  );
}


export default Register;

