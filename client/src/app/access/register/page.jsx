"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo2.svg";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [numberCode, setNumberCode] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
    // Handle form submission logic here
  };

  return (
    <main className="flex flex-col items-center h-full">
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
        className="overflow-visible text-sixth"
        style={{ width: "335px" }}
      >
        <div className="flex justify-between mb-5">
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute bg-white w-10 text-center text-xs"
              style={{ top: "-7px", left: "10px" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "162px", height: "41px" }}
              className="outline-none border border-2 border-sixth rounded-md px-1"
            />
          </div>
          {/* Last Name */}
          <div className="relative">
            <label
              htmlFor="lastName"
              className="absolute bg-white w-16 text-center text-xs"
              style={{ top: "-7px", left: "10px" }}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: "162px", height: "41px" }}
              className="outline-none border border-2 border-sixth rounded-md px-1"
            />
          </div>
        </div>

        <div className="flex justify-between mb-5">
          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute bg-white w-9 text-center text-xs"
              style={{ top: "-7px", left: "10px" }}
            >
              E-mail
            </label>
            <div
              className="flex border border-2 border-sixth rounded-md"
              style={{ width: "231px", height: "41px" }}
            >
              <span className="flex items-center mx-1">
                <MdAlternateEmail />
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none w-full mr-1"
              />
            </div>
          </div>
          {/* Birth date */}
          <div className="relative">
            <label
              htmlFor="birthdate"
              className="absolute bg-white w-16 text-center text-xs"
              style={{ top: "-7px", left: "14px" }}
            >
              Birth Date
            </label>
            <input
              type="text"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              style={{ width: "91px", height: "41px" }}
              className="outline-none border border-2 border-sixth rounded-md px-1"
            />
          </div>
        </div>

        <div className="flex justify-between mb-5">
          {/* Country */}
          <div className="relative">
            <label
              htmlFor="country"
              className="absolute bg-white w-12 text-center text-xs"
              style={{ top: "-7px", left: "10px" }}
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ width: "126px", height: "41px" }}
              className="outline-none border border-2 border-sixth rounded-md px-1"
            />
          </div>

          {/* Number */}
          <div className="relative">
            <label
              htmlFor="numberCode"
              className="absolute bg-white w-12 text-center text-xs"
              style={{ top: "-8px", left: "10px", height: "13px" }}
            >
              Number
            </label>
            <div
              className="flex border border-2 border-sixth rounded-md"
              style={{ width: "186px", height: "41px" }}
            >
              <span className="flex items-center">
                <AiOutlinePlus />
              </span>
              <input
                type="number"
                id="numberCode"
                value={numberCode}
                onChange={(e) => setNumberCode(e.target.value)}
                className="outline-none border-r border-sixth"
                style={{ width: "20px" }}
              />
              <input
                type="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="outline-none pl-1"
                style={{ width: "140px" }}
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <label
            htmlFor="password"
            className="absolute bg-white w-14 text-center text-xs"
            style={{ top: "-7.5px", left: "10px" }}
          >
            Password
          </label>
          <div
            className="flex justify-between border border-2 border-sixth rounded-md"
            style={{ width: "231px", height: "41px" }}
          >
            <span className="flex items-center mx-1">
              <IoMdLock />
            </span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none "
            />
            <span className="flex items-center mr-1">
              <LuEye />
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-5">
          <label
            htmlFor="confirmPassword"
            className="absolute bg-white w-26 text-center text-xs"
            style={{ top: "-7.5px", left: "10px" }}
          >
            Confirm Password
          </label>
          <div
            className="flex justify-between border border-2 border-sixth rounded-md"
            style={{ width: "231px", height: "41px" }}
          >
            <span className="flex items-center mx-1">
              <IoMdLock />
            </span>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="outline-none"
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
            style={{
              width: "156px",
              height: "38px",
            }}
            className="button bg-secondary border rounded-md font-bold flex items-center justify-center ml-auto text-black"
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
      <Link
        href="/"
        className="font-medium text-secondary text-xs mt-6 bg-white"
      >
        <div className="flex flex-col">
          <span>Have an account?</span>
          <span className="underline text-center">Sign in</span>
        </div>
      </Link>
    </main>
  );
};

export default Register;
