"use client";

import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const ComfyContext = createContext();

const ContextProvider = ({ children }) => {
  // Maneja el array de productos del carrito

  const [cart, setCart] = useState([]);

  let badgeCart = cart.length;

  function AddToCart(newProduct, quantity) {
    const isProductInCart = cart.some(
      (item) => item.product.name === newProduct.name
    );

    if (isProductInCart) {
      toast.error(`${newProduct.name} already in the cart.`);
    } else {
      setCart([...cart, { product: newProduct, quantity: quantity }]);
      toast.success(`${newProduct.name} has been added to your cart.`);
    }
  }

  function RemoveFromCart(productToRemove) {
    setCart(cart.filter((i) => i.product.name !== productToRemove.name));
    toast.error(`${productToRemove.name} removed from cart`);
    // add react hook toast
  }
  const updateCartItemQuantity = (productId, newQuantity) => {
    // Buscar el producto en el carrito por su ID
    const updatedCart = cart.map((i) => {
      if (i.product.id === productId) {
        return {
          ...i,
          quantity: newQuantity,
        };
      }
      return i;
    });

    // Actualizar el estado del carrito con el nuevo carrito
    setCart(updatedCart);
  };

  // Maneja el array de productos favoritos

  const [favs, setFavs] = useState([]);
  function AddToFav(newFavorite) {
    const isProducInFav = favs.some((product) => product.id === newFavorite.id);

    if (isProducInFav) {
      toast.error(`${newFavorite.name} is already added in fav`);
    } else setFavs([...favs, newFavorite]);

    // add react hook toast
  }

  function RemoveFromFav(favoriteToRemove) {
    let removed = favs.filter((product) => product.name !== favoriteToRemove.name);
    setFavs(removed);
    setTimeout(() => {
      toast.error(`${favoriteToRemove.name} Removed from favorites`);
    }, 200);
  }

  // Maneja el booleano que muestra el modal de carga
  const [loading, setLoading] = useState(true);

  // String de bùsqueda
  const [search, setSearch] = useState("");

  return (
    <ComfyContext.Provider
      value={{
        cart,
        badgeCart,
        setCart,
        AddToCart,
        RemoveFromCart,
        updateCartItemQuantity,
        favs,
        setFavs,
        AddToFav,
        RemoveFromFav,
        loading,
        setLoading,
        search,
        setSearch,
      }}
    >
      {children}
    </ComfyContext.Provider>
  );
};

export default ContextProvider;
