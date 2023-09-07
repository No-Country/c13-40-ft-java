"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
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

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/users", user)
      .then(() => alert("You have logged in!"))
      .catch(() => alert("An error has occured"));
    // Testing required
    // router.push("/access/login"); // Navigate to the login page
  };

  return (
    <main data-aos="fade" className="flex flex-col items-center">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Comfy logo"
        quality={100}
        className="mt-24 mb-16 w-[300px] h-[88px] xl:w-[551px] xl:h-[161px]"
      />

      <div className="flex flex-col items-center w-full xl:w-[557px] xl:h-[594px] xl:border-[6px] border-fifth rounded-[20px]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="overflow-visible w-[325px] xl:w-[500px]"
        >
          {/* Email */}
          <div className="flex items-center mb-6 xl:mt-14">
            <label
              htmlFor="email"
              className="mr-2 text-[34px] text-sixth xl:mr-6 xl:text-[40px]"
            >
              <MdAlternateEmail />
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              className="border border-2 border-primary xl:border-fourth rounded-md outline-none px-4 py-2 w-[269px] xl:w-[413px] xl:h-[63px] xl:text-[20px] text-sixth"
            />
          </div>
          {/* Password */}
          <div className="flex items-center mb-4 xl:mb-10">
            <label
              htmlFor="password"
              className="mr-2 text-[34px] text-sixth xl:mr-6 xl:text-[40px]"
            >
              <IoMdLock />
            </label>
            <div className="border border-2 border-primary xl:border-fourth rounded-md pl-4 pr-2 py-2 w-[269px] flex items-center justify-between xl:w-[413px] xl:h-[63px] xl:text-[20px] text-sixth">
              <input
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                className="w-full mr-2 outline-none"
              />
              <span className="xl:text-[27px]">
                <LuEye />
              </span>
            </div>
          </div>
          {/* Forgot Password */}
          <div className="font-medium text-important text-xs xl:text-[14px] xl:font-normal underline mb-4 xl:mb-8 mx-auto pl-4">
            <Link href="/">Forgot your password?</Link>
          </div>
          {/* Submit */}
          <div className="xl:w-[477px]">
            <button
              type="submit"
              className="button bg-secondary border rounded-md font-bold flex items-center justify-center ml-auto w-[156px] h-[38px] xl:mb-4"
            >
              Continue
            </button>
          </div>
        </form>
        <hr className="mt-12 border-t border-fifth w-full xl:w-[478.5px] xl:border-secondary" />
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
        <Link
          href="/"
          className="font-medium text-secondary text-xs mt-6 xl:text-[16px]"
        >
          ¿No tienes cuenta? <span className="underline">Regístrate</span>
        </Link>
      </div>
    </main>
  );
};

export default Login;
