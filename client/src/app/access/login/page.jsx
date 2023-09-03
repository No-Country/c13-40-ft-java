"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
    // Handle form submission logic here
  };

  return (
    <main className="flex flex-col items-center">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Comfy logo"
        quality={100}
        className="mt-24 mb-16 max-w-xs max-w-[300px] w-[80vw] xl:max-w-[551px]"
      />

      <div className="flex flex-col items-center justify-center w-[557px] h-[594px] border-[6px] border-fifth rounded-[20px]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-visible w-[500px]">
          {/* Email */}
          <div className="flex items-center mb-6">
            <label htmlFor="email" className="mr-6 text-[40px] text-sixth">
              <MdAlternateEmail />
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-2 border-primary rounded-md outline-none px-4 py-2 w-[413px] h-[63px] text-[20px] text-sixth"
            />
          </div>
          {/* Password */}
          <div className="flex items-center mb-4">
            <label htmlFor="password" className="mr-6 text-[40px] text-sixth">
              <IoMdLock />
            </label>
            <div className="border border-2 border-primary rounded-md pl-4 pr-2 py-2 flex items-center justify-between w-[413px] h-[63px] text-[20px] text-sixth">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full mr-2 outline-none"
              />
              <span>
                <LuEye />
              </span>
            </div>
          </div>
          {/* Forgot Password */}
          <div className="font-medium text-important text-xs underline mb-4 mx-auto pl-4">
            <Link href="/">Forgot your password?</Link>
          </div>
          {/* Submit */}
          <div>
            <button
              type="submit"
              className="button bg-secondary border rounded-md font-bold flex items-center justify-center ml-auto w-[156px] h-[38px]"
            >
              Continue
            </button>
          </div>
        </form>
        <hr className="mt-12 border border-fifth w-full" />
        {/* Google */}
        <div className="mt-12">
          <Link
            href="/"
            className="flex items-center justify-start button border border-sixth border-2 rounded-md px-4 space-x-6 w-[292px] h-[41px]"
          >
            <FcGoogle className="text-[33px]" />
            <p>Continuar con Google</p>
          </Link>
        </div>
        {/* Guest */}
        <Link href="/" className="font-medium text-secondary text-xs mt-6">
          ¿No tienes cuenta? <span className="underline">Regístrate</span>
        </Link>
      </div>
    </main>
  );
};

export default Login;
