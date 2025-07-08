import React, { useState } from "react";
import { icons, images } from "../assets/Data";
import SecHead from "../components/SecHead";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () => {
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
            title="Sign up with email"
            className="font-udemy text-center mb-4"
          />

          <InputField
            id="fullname"
            label="fullname"
            type="email"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              defaultChecked
              className="accent-purple w-5 h-4 mt-1"
            />
            <span>
              Send me <strong>special offers</strong>, personalized
              recommendations, and learning tips.
            </span>
          </label>

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

          <div className="flex gap-2 flex-col text-center mt-12">
            <div className="text-[.7rem] text-lightBlack">
              By signing up, you agree to our{" "}
              <a href="#" className="text-purple underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple underline">
                Privacy Policy
              </a>
              .
            </div>
            <div className="p-4 bg-gray-100 border-b-2 border-[#dfdfdf]">
              Already have an account?
              <span className="font-semibold text-purple underline">
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
