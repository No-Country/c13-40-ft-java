"use client";

import { createContext, useState } from "react";

export const ComfyContext = createContext();

const ContextProvider = ({ children }) => {
  // Maneja el array de productos del carrito
  const [cart, setCart] = useState([]);
  console.log(cart);
  function AddToCart(newProduct) {
    const isProducInCart = cart.some((product) => product.id === newProduct.id);

    if (isProducInCart) {
      alert(`${newProduct.name} is already added in cart`);
    } else setCart([...cart, product]);
  }
  function RemoveFromCart(newProduct) {
    setCart(cart.filter((product) => product.id !== newProduct.id));
    alert(`${newProduct.name} Removed from cart`);
  }
  // Maneja el array de productos favoritos
  const [favs, setFavs] = useState([]);
  // Maneja el booleano que muestra el modal de carga
  const [loading, setLoading] = useState(true);

  return (
    <ComfyContext.Provider
      value={{
        cart,
        setCart,
        AddToCart,
        RemoveFromCart,
        favs,
        setFavs,
        loading,
        setLoading,
      }}
    >
      {children}
    </ComfyContext.Provider>
  );
};

export default ContextProvider;
