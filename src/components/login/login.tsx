import React, { FC, useState } from "react";
import ReusableInput from "../../reusable_component/auth_input/auth_input";
import AuthBackground from "../../reusable_component/auth_background/auth_background";
import Logo from "../logo/logo";
import SubmitButton from "../../reusable_component/button/submit_button";
import { LoginForm } from "../../interfaces";
import { ROUTES } from "../../Routes/routes";



const InitialState: LoginForm = {
  email: "",
  password: "",
};

const Login: FC = () => {
  const [value, setFormValue] = useState<LoginForm>(InitialState);
  const { email, password } = value;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", e.target.value);
    setFormValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AuthBackground />
      <div className="absolute top-1/3 left-1/2 w-1/4 text-text_color font-semibold">
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
          <div className="flex items-center mb-[50px]">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              onChange={handleChange}
              className="hidden peer"
            />
            <label
              htmlFor="rememberMe"
              className="w-4 h-4  rounded cursor-pointer flex items-center justify-center mr-2"
              style={{
                backgroundColor: "#16161E",
              }}
            ></label>
            <div className="text-descp_text_color text-font_small flex justify-between w-full mt-1 ">
              <div>Save Email and Password</div>
              <a href={ROUTES.register}>Don’t have an account?</a>
            </div>
            
          </div>
          <SubmitButton className='mt-5'text="Sign in"/>
        </form>
      </div>
    </>
  );
};

export default Login;
