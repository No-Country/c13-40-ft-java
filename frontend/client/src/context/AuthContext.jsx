import { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserEmail = localStorage.getItem("userEmail");

    if (storedIsLoggedIn && storedUserEmail) {
      setIsLoggedIn(storedIsLoggedIn === "true");
      setUserEmail(storedUserEmail);
    }
  }, []);

  const login = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    toast.success("You have logged in!");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("favs");
    localStorage.removeItem("cart");
    toast.success("You have signed out!");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
