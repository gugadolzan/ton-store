import React from 'react';
import { create } from 'react-test-renderer';

import mockData from './__mocks__/mockData.json';
import ShoppingCartContext from '../context/ShoppingCartContext';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

describe('Test ShoppingCartScreen', () => {
  describe('when there are products in cart', () => {
    const tree = create(
      <ShoppingCartContext.Provider
        value={{
          shoppingCart: mockData.map((product) => ({
            product,
            quantity: 1,
          })),
        }}
      >
        <ShoppingCartScreen />
      </ShoppingCartContext.Provider>
    );

    it('should render correctly', () => {
      expect(tree).toMatchSnapshot();
    });

    it('should render text informing the number of products in the cart', () => {
      const productsInCart = tree.root.findByProps({testID: 'products-in-cart'})
        .props.children;
      expect(productsInCart.join('')).toBe('4 produto(s) adicionado(s) ao carrinho');
    });

    it('should render total price', () => {
      const total = tree.root.findByProps({ testID: 'total-in-cart' })
        .props.children;
      expect(total.slice(3)).toBe('799,20');
    });
  });

  describe('when there are no products in cart', () => {
    const tree = create(
      <ShoppingCartContext.Provider
        value={{
          shoppingCart: [],
        }}
      >
        <ShoppingCartScreen />
      </ShoppingCartContext.Provider>
    );

    it('should render correctly', () => {
      expect(tree).toMatchSnapshot();
    });

    it('should render text informing that there are no products in the cart', () => {
      const noProducts = tree.root.findByProps({testID: 'no-products-in-cart'})
        .props.children;
      expect(noProducts).toBe('Nenhum produto no carrinho!');
    });
  });
});
