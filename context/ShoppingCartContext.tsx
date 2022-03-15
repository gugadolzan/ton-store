import { createContext } from 'react';

import { IProduct, IShoppingCartContext } from '../types';

const defaultContext = {
  shoppingCart: [],
  setShoppingCart: (products: IProduct[]) => {
    console.log(products);
  },
};

const ShoppingCartContext = createContext<IShoppingCartContext>(defaultContext);

export default ShoppingCartContext;
