import React, { useState } from "react";
import { icons, images } from "../assets/Data";
import SecHead from "../components/SecHead";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="small-container lg:mt-25 grid grid-cols-1 lg:grid-cols-12 place-items-center justify-between">
      <div className="hidden max-w-[500px] lg:col-span-6 w-full lg:block ">
        <img src={images.logind} className="w-full object-cover" alt="" />
      </div>
      <div className="w-full max-w-[500px] block col-span-full lg:col-span-6 lg:hidden">
        <img src={images.loginm} className="object-cover w-full" alt="" />
      </div>
      <div className="w-full lg:col-start-8 col-span-full lg:col-span-4 max-w-[500px]">
        <div className="flex flex-col gap-4 w-full m-auto">
          <SecHead
            title="Log in to continue your learning journey"
            className="font-udemy text-center mb-4"
          />

          <InputField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <Button
              text="Continue with email"
              icon={icons.mailIcon}
              iconleft={true}
              type="dark"
            />
          </div>
          <div className="border-t border-[#ddd] relative my-6">
            <p className=" absolute bg-white px-1 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-[.8rem] text-lightBlack">
              Other log in options
            </p>
          </div>

          <div className="flex m-auto gap-4 items-stretch">
            <div className=" hover:bg-purple-100 link w-12 p-2 border border-purple rounded">
              <img src={images.googleicon} alt="" />
            </div>
            <div className=" hover:bg-purple-100 link w-12 p-2 border border-purple rounded">
              <img src={images.fbicon} alt="" />
            </div>
            <div className=" hover:bg-purple-100 link w-12 p-2 border border-purple rounded">
              <img src={images.appleicon} alt="" />
            </div>
          </div>

          <div className="flex flex-col text-center mt-12">
            <div className="p-4 bg-gray-100 border-b-2 border-[#dfdfdf]">
              Don't have an account?
              <span className="font-semibold text-purple underline">
                Sign up
              </span>
            </div>
            <div className="font-semibold text-purple underline p-4 bg-gray-100">
              Log in with your organization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
