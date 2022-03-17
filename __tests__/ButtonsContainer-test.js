import React from 'react';
import { create } from 'react-test-renderer';

import mockData from './__mocks__/mockData.json';
import ButtonsContainer from '../components/ButtonsContainer';
import ShoppingCartContext from '../context/ShoppingCartContext';

describe('Test ButtonsContainer', () => {
  const tree = create(
    <ShoppingCartContext.Provider
      value={{
        shoppingCart: [
          {
            product: mockData[1],
            quantity: 2,
          },
        ],
      }}
    >
      <ButtonsContainer product={mockData[1]} />
    </ShoppingCartContext.Provider>
  );

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should render quantity', () => {
    const quantity = tree.root.findByProps({ testID: 'quantity' })
      .props.children;
    expect(quantity).toBe(2);
  });

  it('should render plus button', () => {
    const plusButton = tree.root.findByProps({ testID: 'plus-button' })
      .props.children.props.children;
    expect(plusButton).toBe('+');
  });

  it('should render minus button', () => {
    const minusButton = tree.root.findByProps({ testID: 'minus-button' })
      .props.children.props.children;
    expect(minusButton).toBe('-');
  });
});
