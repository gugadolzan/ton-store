import React from 'react';
import { FlatList } from 'react-native';

import styles from '../styles';
import { IProductsListProps } from '../types';
import ProductItem from './ProductItem';

export default function ProductsList({ products }: IProductsListProps) {
  return (
    <FlatList
      data={products}
      keyExtractor={({ id }) => id}
      style={styles.productsList}
      renderItem={({ item }) => <ProductItem product={item} />}
    />
  );
}
