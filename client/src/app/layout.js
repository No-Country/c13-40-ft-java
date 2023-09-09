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

// export const metadata = {
//   title: "No-Country",
//   description: "c13-40-ft-java e-commerce",
// };

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <ContextProvider>
              <ToasterContext />
              <Toaster position="bottom-center" reverseOrder={false} />
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
