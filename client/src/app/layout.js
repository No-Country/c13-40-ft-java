"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

// Context
import ContextProvider from "@/context/ComfyContext";
import ToasterContext from "@/context/ToasterContext";
import { AuthContextProvider } from "@/context/AuthContext";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Comfy Store",
  description:
    "Comfy Store: Tu destino en línea para muebles de alta calidad. Explora una amplia gama de muebles para el hogar, desde sofás cómodos hasta elegantes mesas de comedor. Descubre opciones de diseño moderno y clásico que se adaptan a cualquier estilo de decoración. ¡Encuentra la comodidad que necesitas para tu hogar en Comfy Store!",
};

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <title>Comfy Store</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <ContextProvider>
              <ToasterContext />
              <Navbar />
              {children}
              <Footer />
            </ContextProvider>
          </AuthContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
