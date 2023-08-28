import "./globals.css";
import { Roboto } from "next/font/google";
import ContextProvider from "../context/ComfyContext";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "No-Country",
  description: "c13-40-ft-java e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ContextProvider>
  );
}
