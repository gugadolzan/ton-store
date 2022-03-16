import { createContext } from 'react';

import { IProduct, IShoppingCartContext } from '../types';

const defaultContext = {
  addToCart: (product: IProduct) => {
    console.log(product);
  },
  removeFromCart: (product: IProduct) => {
    console.log(product);
  },
  shoppingCart: [],
};

const ShoppingCartContext = createContext<IShoppingCartContext>(defaultContext);

export default ShoppingCartContext;
