"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
    // Handle form submission logic here
  };

  return (
    <main data-aos="fade" className="flex flex-col items-center h-full">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Comfy logo"
        quality={100}
        style={{
          width: "80vw",
          maxWidth: "300px",
          height: "100px",
        }}
        className="mt-24 mb-16"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="overflow-visible"
        style={{ width: "325px" }}
      >
        {/* Email */}
        <div className="flex items-center mb-6">
          <label htmlFor="email" className="mr-2 text-3xl text-sixth">
            <MdAlternateEmail />
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-2 border-primary rounded-md outline-none px-4 py-2 w-full w-64"
          />
        </div>

        {/* Password */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="password"
            className="mr-2 text-3xl text-sixth text-sixth"
          >
            <IoMdLock />
          </label>
          <div className="border border-2 border-primary rounded-md outline-none px-4 py-2 w-full flex items-center justify-between w-64">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
            style={{
              width: "156px",
              height: "38px",
            }}
            className="button bg-secondary border rounded-md font-bold flex items-center justify-center ml-auto"
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
          style={{
            width: "292px",
            height: "41px",
          }}
          className="flex items-center justify-start button border border-sixth border-2 rounded-md px-4 space-x-6"
        >
          <FcGoogle
            style={{
              fontSize: "33px",
            }}
          />
          <p>Continuar con Google</p>
        </Link>
      </div>

      {/* Guest */}
      <Link href="/" className="font-medium text-secondary text-xs mt-6">
        ¿No tienes cuenta? <span className="underline">Regístrate</span>
      </Link>
    </main>
  );
};

export default Login;
