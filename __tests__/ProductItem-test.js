import React from 'react';
import { create } from 'react-test-renderer';

import mockData from './__mocks__/mockData.json';
import ProductItem from '../components/ProductItem';
import ShoppingCartContext from '../context/ShoppingCartContext';

describe('Test ProductItem', () => {
  const tree = create(
    <ShoppingCartContext.Provider
      value={{
        shoppingCart: [],
      }}
    >
      <ProductItem product={mockData[0]} />
    </ShoppingCartContext.Provider>
  );

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should render image', () => {
    const image = tree.root.findByProps({ testID: 'product-image' })
      .props.source.uri;
    expect(image).toBe(
      'https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/frontview/t1.png'
    );
  });

  it('should render title', () => {
    const title = tree.root.findByProps({ testID: 'product-title' })
      .props.children;
    expect(title).toBe('Maquininha T1');
  });

  it('should render price formatted', () => {
    const price = tree.root.findByProps({ testID: 'product-price' })
      .props.children;
    expect(price.slice(3)).toBe('94,80');
  });

  it('should render add to cart button', () => {
    const addToCartButton = tree.root.findByProps({ testID: 'add-to-cart' })
      .props.children.props.children;
    expect(addToCartButton).toBe('Adicionar ao carrinho');
  });
});
