import React, { FC, useState } from 'react';

import ShoppingCartContext from './ShoppingCartContext';
import { IProduct } from '../types';

const ShoppingCartProvider: FC = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<IProduct[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
