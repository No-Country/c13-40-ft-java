"use client";

import { createContext, useState } from "react";

export const ComfyContext = createContext();

const ContextProvider = ({ children }) => {
  // Maneja el array de productos del carrito

  const [cart, setCart] = useState([]);

  // function TotalOrder (ProductsInCart) (

  // )

  function AddToCart(newProduct) {
    const isProducInCart = cart.some((product) => product.id === newProduct.id);

    if (isProducInCart) {
      alert(`${newProduct.name} is already added in cart`);
    } else setCart([...cart, newProduct]);
    // add react hook toast
  }

  function RemoveFromCart(productToRemove) {
    setCart(cart.filter((product) => product.name !== productToRemove.name));
    setTimeout(() => {
      alert(`${productToRemove.name} Removed from cart`);
    }, 200);
    // add react hook toast
  }

  // Maneja el array de productos favoritos

  const [favs, setFavs] = useState([]);
  function AddToFav(newFavorite) {
    const isProducInFav = favs.some((product) => product.id === newFavorite.id);

    if (isProducInFav) {
      alert(`${newFavorite.name} is already added in fav`);
    } else setFavs([...favs, newFavorite]);
    // add react hook toast
  }

  function RemoveFromFav(favoriteToRemove) {
    setCart(cart.filter((product) => product.name !== favoriteToRemove.name));
    setTimeout(() => {
      alert(`${favoriteToRemove.name} Removed from favorites`);
    }, 200);
    // add react hook toast
  }

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
        AddToFav,
        RemoveFromFav,
        loading,
        setLoading,
      }}
    >
      {children}
    </ComfyContext.Provider>
  );
};

export default ContextProvider;
