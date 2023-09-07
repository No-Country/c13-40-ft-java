"use client";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { toast } from "react-hot-toast";

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Make sure you are writing a valid e-mail")
      .required("Your e-mail is required"),
    password: yup
      .string()
      .min(6, "Your password needs to have 6 characters at least")
      .max(20, "Your password can't have more than 20 characters")
      .required("Your password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (user) => {
    axios
      .post("https://comfy-nocountry.azurewebsites.net/login", user)
      .then(() => {
        toast.success("You have registered!");
        router.push("/"); // Navigate to the home page
      })
      .catch(() => toast.error("Something went wrong!"));
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
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-visible w-[325px] xl:w-[500px]"
        >
          {/* Email */}
          <div className="mb-6 xl:mt-14">
            <div className="flex items-center">
              <label
                htmlFor="email"
                className="mr-2 text-[34px] text-sixth xl:mr-6 xl:text-[40px]"
              >
                <MdAlternateEmail />
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Email"
                className="border border-2 border-primary xl:border-fourth rounded-md outline-none px-4 py-2 w-[269px] xl:w-[413px] xl:h-[63px] xl:text-[20px] text-sixth"
              />
            </div>
            {errors.email && (
              <div className="text-important ml-12 text-[10px] mt-2 max-w-[250px] xl:text-sm xl:max-w-[400px] xl:ml-[70px] xl:mt-3">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 xl:mb-10">
            <div className="flex items-center">
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
                  {...register("password")}
                  placeholder="Password"
                  className="w-full mr-2 outline-none"
                />
                <span className="xl:text-[27px]">
                  <LuEye />
                </span>
              </div>
            </div>
            {errors.password && (
              <div className="text-important ml-12 text-[10px] mt-2 max-w-[250px] xl:text-sm xl:max-w-[400px] xl:ml-[70px] xl:mt-3">
                {errors.password.message}
              </div>
            )}
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
