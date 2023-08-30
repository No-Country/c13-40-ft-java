'use client';
import { createContext, useState } from "react";

export const ComfyContext = createContext();

const ContextProvider = ({ children }) => {
  // Maneja el array de productos del carrito
  const [cart, setCart] = useState([]);
  // Maneja el array de productos favoritos
  const [favs, setFavs] = useState([]);
  // Maneja el booleano que muestra el modal de carga
  const [loading, setLoading] = useState(true);

  return (
    <ComfyContext.Provider
      value={{ cart, setCart, favs, setFavs, loading, setLoading }}
    >
      {children}
    </ComfyContext.Provider>
  );
};

export default ContextProvider;
