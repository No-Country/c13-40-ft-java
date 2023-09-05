"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo2.svg";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    birthDate: "",
    country: "",
    numberCode: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/users", user)
      .then(() => alert("You have registered!"))
      .catch(() => alert("An error has occured"));
    // Testing required
    // router.push("/access/login"); // Navigate to the login page
  };

  return (
    <main className="flex flex-col items-center">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Comfy logo"
        quality={100}
        className="mt-24 mb-16 w-[300px] h-[88px] xl:w-[551px] xl:h-[161px]"
      />

      <div className="flex flex-col items-center w-full xl:w-[557px] xl:h-[594px] xl:border-[6px] border-black rounded-[20px] xl:px-[12px] xl:pt-[35px]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="overflow-visible text-sixth w-[335px] xl:w-full"
        >
          <div className="flex justify-between xl:justify-start mb-5">
            {/* Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute bg-white w-10 xl:w-11 text-center text-xs top-[-7px] left-[10px] xl:text-sm xl:h-[16px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="outline-none border border-2 border-sixth rounded-md px-1 w-[162px] h-[41px] xl:w-[256px] xl:mr-3"
              />
            </div>
            {/* Last Name */}
            <div className="relative">
              <label
                htmlFor="lastName"
                className="absolute bg-white w-16 text-center text-xs top-[-7px] left-[10px] xl:w-20 xl:text-sm xl:h-[16px]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className="outline-none border border-2 border-sixth rounded-md px-1 w-[162px] h-[41px] xl:w-[256px]"
              />
            </div>
          </div>

          <div className="flex justify-between xl:justify-start mb-5">
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute bg-white w-9 text-center text-xs top-[-7px] left-[10px] xl:w-11 xl:text-sm xl:h-[16px]"
              >
                E-mail
              </label>
              <div className="flex border border-2 border-sixth rounded-md w-[231px] h-[41px] xl:w-[323px] xl:mr-3">
                <span className="flex items-center mx-1 xl:hidden">
                  <MdAlternateEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="outline-none w-full mr-1 xl:px-1"
                />
              </div>
            </div>
            {/* Birth date */}
            <div className="relative">
              <label
                htmlFor="birthDate"
                className="absolute bg-white w-16 text-center text-xs top-[-7px] left-[14px] xl:w-[70px] xl:text-sm xl:h-[16px]"
              >
                Birth Date
              </label>
              <input
                type="text"
                id="birthDate"
                value={user.birthDate}
                onChange={(e) =>
                  setUser({ ...user, birthDate: e.target.value })
                }
                className="outline-none border border-2 border-sixth rounded-md px-1 w-[91px] h-[41px] xl:w-[143px]"
              />
            </div>
          </div>

          <div className="flex justify-between xl:justify-start mb-5">
            {/* Country */}
            <div className="relative">
              <label
                htmlFor="country"
                className="absolute bg-white w-12 text-center text-xs top-[-7px] left-[10px] xl:w-14 xl:text-sm xl:h-[16px]"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                value={user.country}
                onChange={(e) => setUser({ ...user, country: e.target.value })}
                className="outline-none border border-2 border-sixth rounded-md px-1 w-[126px] h-[41px] xl:w-[206px] xl:mr-3"
              />
            </div>

            {/* Number */}
            <div className="relative">
              <label
                htmlFor="numberCode"
                className="absolute bg-white w-12 text-center text-xs top-[-8px] left-[10px] h-[13px] xl:w-14 xl:text-sm xl:h-[16px] xl:left-[8px]"
              >
                Number
              </label>
              <div className="flex border border-2 border-sixth rounded-md w-[186px] h-[41px] xl:w-[258px]">
                <span className="flex items-center xl:pl-[2px]">
                  <AiOutlinePlus />
                </span>
                <input
                  type="number"
                  id="numberCode"
                  value={user.numberCode}
                  onChange={(e) =>
                    setUser({ ...user, numberCode: e.target.value })
                  }
                  className="outline-none border-r border-sixth w-[20px] xl:w-[40px] xl:px-1"
                />
                <input
                  type="number"
                  id="number"
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                  className="outline-none pl-1 w-[140px] xl:w-[190px]"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="relative mb-5">
            <label
              htmlFor="password"
              className="absolute bg-white w-14 text-center text-xs top-[-7.5px] left-[10px] xl:w-16 xl:text-sm xl:h-[16px]"
            >
              Password
            </label>
            <div className="flex justify-between border border-2 border-sixth rounded-md w-[231px] h-[41px] xl:w-[311px]">
              <span className="flex items-center mx-1 xl:hidden">
                <IoMdLock />
              </span>
              <input
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="outline-none xl:mx-1 xl:w-full"
              />
              <span className="flex items-center mr-1">
                <LuEye />
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-5 xl:mb-6">
            <label
              htmlFor="confirmPassword"
              className="absolute bg-white w-26 text-center text-xs top-[-7.5px] left-[10px] xl:w-[120px] xl:text-sm xl:h-[16px]"
            >
              Confirm Password
            </label>
            <div className="flex justify-between border border-2 border-sixth rounded-md w-[231px] h-[41px] xl:w-[311px]">
              <span className="flex items-center mx-1 xl:hidden">
                <IoMdLock />
              </span>
              <input
                type="password"
                id="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className="outline-none xl:mx-1 xl:w-full"
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

        <hr className="mt-12 border-t w-full border-sixth xl:mt-8" />

        {/* Google */}
        <div className="mt-12 xl:mt-8">
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
