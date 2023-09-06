"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo2.svg";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { toast } from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://comfy-nocountry.azurewebsites.net/insertUser", user)
      .then(() => {
        toast.success("You have registered!");
        router.push("/access/login"); // Navigate to the login page
      })
      .catch(() => toast.error("Something went wrong!"));
    // Testing required
  };

  return (
    <main className="flex flex-col items-center">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Comfy logo"
        quality={100}
        className="mt-16 mb-12 w-[320px] xl:w-[590px]"
      />

      <div className="flex flex-col items-center w-full xl:w-[557px] xl:h-[594px] xl:border-[6px] border-black rounded-[20px] xl:px-[12px] xl:pt-[35px]">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-visible text-sixth w-[335px] xl:w-full"
        >
          <div className="flex justify-between xl:justify-start mb-5">
            {/* Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute bg-white w-10 xl:w-11 text-center text-xs top-[-7px] left-[10px] xl:text-sm xl:h-[16px] xl:top-[-10px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="outline-none border border-[3px] border-sixth rounded-md px-1 w-[162px] h-[41px] xl:w-[256px] xl:mr-3"
              />
            </div>
            {/* Last Name */}
            <div className="relative">
              <label
                htmlFor="lastName"
                className="absolute bg-white w-16 text-center text-xs top-[-7px] left-[10px] xl:w-[75px] xl:text-sm xl:h-[16px] xl:top-[-10px]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className="outline-none border border-[3px] border-sixth rounded-md px-1 w-[162px] h-[41px] xl:w-[256px]"
              />
            </div>
          </div>

          <div className="flex justify-between xl:justify-start mb-5">
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute bg-white w-9 text-center text-xs top-[-7.5px] left-[10px] xl:w-11 xl:text-sm xl:h-[16px] xl:top-[-10px]"
              >
                E-mail
              </label>
              <div className="flex border border-[3px] border-sixth rounded-md w-[286px] h-[41px] xl:w-[420px] xl:mr-3">
                <span className="flex items-center mx-1 text-[17px] xl:hidden">
                  <MdAlternateEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="outline-none w-full mr-1 xl:mx-1"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="relative mb-5">
            <label
              htmlFor="password"
              className="absolute bg-white w-14 text-center text-xs top-[-7.5px] left-[10px] xl:w-[68px] xl:text-sm xl:h-[16px] xl:top-[-10px]"
            >
              Password
            </label>
            <div className="flex justify-between border border-[3px] border-sixth rounded-md w-[231px] h-[41px] xl:w-[311px]">
              <span className="flex items-center mx-1 text-[18px] xl:hidden">
                <IoMdLock />
              </span>
              <input
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="outline-none w-[180px] pr-1 xl:mx-1 xl:w-full"
              />
              <span className="flex items-center mr-1">
                <LuEye />
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-14 xl:mb-6">
            <label
              htmlFor="confirmPassword"
              className="absolute bg-white w-26 text-center text-xs top-[-7.5px] left-[10px] xl:w-[120px] xl:text-sm xl:h-[16px] xl:top-[-10px]"
            >
              Confirm Password
            </label>
            <div className="flex justify-between border border-[3px] border-sixth rounded-md w-[231px] h-[41px] xl:w-[311px]">
              <span className="flex items-center mx-1 text-[18px] xl:hidden">
                <IoMdLock />
              </span>
              <input
                type="password"
                id="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className="outline-none w-[180px] pr-1 xl:mx-1 xl:w-full"
              />
              <span className="flex items-center mr-1">
                <LuEye />
              </span>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="button bg-secondary border rounded-md font-bold flex items-center justify-center ml-auto text-black w-[156px] h-[38px]"
            >
              Continue
            </button>
          </div>
        </form>

        <hr className="mt-8 border-t w-[95vw] border-sixth xl:mt-8" />

        {/* Google */}
        <div className="mt-8 xl:mt-8">
          <Link
            href="/"
            className="flex items-center justify-start button border border-sixth border-[3px] rounded-md px-4 space-x-6 w-[292px] h-[41px]"
          >
            <FcGoogle className="text-[33px]" />
            <p>Continuar con Google</p>
          </Link>
        </div>

        {/* Guest */}
        <Link
          href="/"
          className="font-medium text-secondary text-xs mt-6 bg-white xl:text-base"
        >
          <div className="flex flex-col">
            <span>Have an account?</span>
            <span className="underline text-center">Sign in</span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Register;
