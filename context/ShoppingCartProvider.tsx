import React, { FC, useState } from 'react';

import ShoppingCartContext from './ShoppingCartContext';
import { IProduct, IShoppingCartItem } from '../types';

/**
 * ShoppingCartProvider is a component that provides the shopping cart context to its children
 * and acts as a global state.
 */
const ShoppingCartProvider: FC = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  /**
   * Adds a product to the shopping cart
   */
  const addToCart = (product: IProduct) => {
    const itemExists = shoppingCart.some(
      (item) => item.product.id === product.id
    );

    // If the item does not exist, add it to the cart
    if (!itemExists) {
      setShoppingCart([...shoppingCart, { product, quantity: 1 }]);
      return;
    }

    // If the item exists, increment the quantity
    const newShoppingCart = shoppingCart.map((item) =>
      item.product.id === product.id
        ? { product, quantity: item.quantity + 1 }
        : item
    );

    setShoppingCart(newShoppingCart);
  };

  /**
   * Removes a product from the shopping cart
   */
  const removeFromCart = (product: IProduct) => {
    let newShoppingCart = shoppingCart.map((item) =>
      item.product.id === product.id
        ? { product, quantity: item.quantity - 1 }
        : item
    );

    const isZero = newShoppingCart.some(
      (item) => item.product.id === product.id && item.quantity === 0
    );

    // If the quantity is 0, remove the item from the cart
    if (isZero) {
      newShoppingCart = shoppingCart.filter(
        (item) => item.product.id !== product.id
      );
    }

    setShoppingCart(newShoppingCart);
  };

  return (
    <ShoppingCartContext.Provider value={{ addToCart, removeFromCart, shoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
