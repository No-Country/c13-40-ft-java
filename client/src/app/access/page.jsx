import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Access = () => {
  return (
    <main className="flex flex-col items-center h-full space-y-10">
      {/* Logo */}
      <div className="bg-primary flex items-center justify-center w-[80vw] max-w-[240px] h-[80vw] max-h-[240px] rounded-[50%] my-[50px]">
        <Image
          src={Logo}
          alt="Comfy logo"
          quality={100}
          className="overflow-visible w-[80vw] max-w-[300px] h-[80vw] max-h-[300px]"
        />
      </div>

      {/* Login */}
      <div className="flex justify-around w-full max-w-[360px]">
        <Link
          href="/access/login"
          className="button bg-secondary border rounded-md font-bold flex items-center justify-center w-[156px] h-[38px]"
        >
          Login
        </Link>

        {/* Signup */}
        <Link
          href="/access/register"
          className="button border-secondary border-2 rounded-md flex items-center justify-center w-[156px] h-[38px]"
        >
          Sign Up
        </Link>
      </div>

      <hr className="mt-12 border border-fifth w-full" />

      {/* Google */}
      <div>
        <Link
          href="/"
          className="flex items-center justify-start button border border-2 rounded-md px-4 space-x-6 border-sixth w-[292px] h-[41px]"
        >
          <FcGoogle className="text-[33px]" />
          <p>Continuar con Google</p>
        </Link>
      </div>

      {/* Guest */}
      <Link href="/" className="underline font-medium text-secondary">
        Continuar como invitado
      </Link>
    </main>
  );
};

export default Access;
