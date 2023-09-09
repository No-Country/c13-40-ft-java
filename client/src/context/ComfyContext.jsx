"use client";

import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ComfyContext = createContext();

const ContextProvider = ({ children }) => {
  // Maneja el array de productos del carrito

  const [cart, setCart] = useState([]);

  let badgeCart = cart.length;

  function AddToCart(newProduct) {
    const isProductInCart = cart.some(
      (product) => product.id === newProduct.id
    );

    if (isProductInCart) {
      toast.error(`${newProduct.name} already in the cart.`);
    } else {
      setCart([...cart, newProduct]);
      toast.success(`${newProduct.name} has been added to your cart.`);
    }
  }

  function RemoveFromCart(productToRemove) {
    setCart(cart.filter((product) => product.name !== productToRemove.name));
    toast.error(`${productToRemove.name} removed from cart`);
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
        badgeCart,
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
