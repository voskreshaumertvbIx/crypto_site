import React, { FC, useState } from "react";
import ReusableInput from "../../reusable_component/auth_input/auth_input";
import Logo from "../logo/logo";
import SubmitButton from "../../reusable_component/button/submit_button";
import { LoginForm } from "../../interfaces";
import { ROUTES } from "../../Routes/routes";
import styles from "./style.module.css";
import { FaHandHoldingHeart } from "react-icons/fa";

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
              <h2 className="font-bold text-font_subhead">Login now</h2>
              <p className="text-font_large font-regular mb-[25px]">Hi, Welcome back</p>
              <button className="flex justify-center items-center w-full bg-[#FFA3BE]  text-white h-[47px] rounded-[5px]">
                Login with Google
                <FaHandHoldingHeart />
              </button>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-font_small">
                or Login with Email
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <ReusableInput
              id="email"
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email id"
            />
            <ReusableInput
              placeholder="Enter your password"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
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
                <a href="#" className="text-[#474BCA] ">Forgot password?</a>
              </div>
            </div>
            <button className="w-full bg-[#474BCA] h-[47px] text-white text-font_large rounded-[5px] mt-4">Login</button>
            <p className="flex justify-center items-center text-center text-font_small p-0">
              Not registered yet?{" "}
              <a href={ROUTES.register}>Create an account</a>
            </p>
          </div>
          <img
            className="m-auto ml-[100px]"
            src="./img/login.png"
            alt="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
