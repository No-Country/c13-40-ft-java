import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Access = () => {
  return (
    <main className="flex flex-col items-center h-screen space-y-10">
      {/* Logo */}
      <div
        style={{
          width: "80vw",
          maxWidth: "200px",
          height: "80vw",
          maxHeight: "200px",
          borderRadius: "50%",
          margin: "50px 0",
        }}
        className="bg-primary"
      >
        <Image
          src={Logo}
          alt="Comfy logo"
          quality={100}
          className="overflow-visible"
          style={{
            transform: "scale(1.2)",
            width: "80vw",
            maxWidth: "200px",
            height: "80vw",
            maxHeight: "200px",
          }}
        />
      </div>

      {/* Login */}
      <div className="flex justify-around w-full">
        <Link
          href="/login/login2"
          style={{
            width: "156px",
            height: "38px",
          }}
          className="button bg-secondary border rounded-md font-bold flex items-center justify-center"
        >
          Login
        </Link>

        {/* Signup */}
        <Link
          href="/login/signup"
          style={{
            width: "156px",
            height: "38px",
          }}
          className="button border-secondary border-2 rounded-md flex items-center justify-center"
        >
          Sign Up
        </Link>
      </div>

      <hr className="mt-12 border border-fifth w-full" />

      {/* Google */}
      <div>
        <Link
          href="/"
          style={{
            borderColor: "#49454F",
            width: "292px",
            height: "41px",
          }}
          className="flex items-center justify-start button border border-2 rounded-md px-4 space-x-6"
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
      <Link href="/" className="underline font-medium text-secondary">
        Continuar como invitado
      </Link>
    </main>
  );
};

export default Access;
