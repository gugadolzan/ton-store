import React from 'react';
import { create } from 'react-test-renderer';

import mockData from './__mocks__/mockData.json';
import ProductsList from '../components/ProductsList';
import ShoppingCartContext from '../context/ShoppingCartContext';

describe('Test ProductsList', () => {
  const tree = create(
    <ShoppingCartContext.Provider
      value={{
        shoppingCart: [],
      }}
    >
      <ProductsList products={mockData} />
    </ShoppingCartContext.Provider>
  );

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
