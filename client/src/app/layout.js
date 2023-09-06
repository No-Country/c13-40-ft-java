"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import { Roboto } from "next/font/google";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ContextProvider from "@/context/ComfyContext";
import ToasterContext from "@/context/ToasterContext";

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
          <ContextProvider>
            <ToasterContext />
            <Navbar />
            {children}
            <Footer />
          </ContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
