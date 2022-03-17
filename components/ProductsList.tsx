import React from 'react';
import { FlatList } from 'react-native';

import ProductItem from './ProductItem';
import styles from '../styles';
import { IProductsArrayProps } from '../types';

export default function ProductsList({ products }: IProductsArrayProps) {
  return (
    <FlatList
      data={products}
      keyExtractor={({ id }) => id}
      style={styles.productsList}
      renderItem={({ item }) => <ProductItem product={item} />}
    />
  );
}
