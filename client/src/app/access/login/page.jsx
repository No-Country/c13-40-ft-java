import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="flex flex-col items-center h-screen">
      {/* Logo */}
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

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <hr className="mt-12 border border-nav w-full" />

      {/* Google */}
      <div className="mt-12">
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
      <Link href="/" className="font-medium text-link text-xs mt-6">
        ¿No tienes cuenta? <span className="underline">Regístrate</span>
      </Link>
    </main>
  );
};

export default Login;
