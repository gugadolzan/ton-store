import { createContext } from 'react';

import { IShoppingCartContext } from '../types';

const defaultContext = {
  shoppingCart: [],
};

const ShoppingCartContext = createContext<IShoppingCartContext>(defaultContext);

export default ShoppingCartContext;
