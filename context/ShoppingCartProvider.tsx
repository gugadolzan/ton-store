import React, { FC, useState } from 'react';

import ShoppingCartContext from './ShoppingCartContext';
import { IProduct, IShoppingCartItem } from '../types';

const ShoppingCartProvider: FC = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  const addToCart = (product: IProduct) => {
    const itemExists = shoppingCart.some(
      (item) => item.product.id === product.id
    );

    if (!itemExists) {
      setShoppingCart([...shoppingCart, { product, quantity: 1 }]);
      return;
    }

    const newShoppingCart = shoppingCart.map((item) =>
      item.product.id === product.id
        ? { product, quantity: item.quantity + 1 }
        : item
    );

    setShoppingCart(newShoppingCart);
  };

  const removeFromCart = (product: IProduct) => {
    let newShoppingCart = shoppingCart.map((item) =>
      item.product.id === product.id
        ? { product, quantity: item.quantity - 1 }
        : item
    );

    const isZero = newShoppingCart.find(
      (item) => item.product.id === product.id && item.quantity === 0
    );

    if (isZero) {
      newShoppingCart = shoppingCart.filter(
        (item) => item.product.id !== product.id
      );
    }

    setShoppingCart(newShoppingCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ addToCart, removeFromCart, shoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
