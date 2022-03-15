import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import styles from '../styles';
import { IProduct } from '../types';

export default function ProductsList({ products }: { products: IProduct[] }) {
  return (
    <FlatList
      data={products}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Text>
            {item.title}, {item.price}
          </Text>
          <Image style={styles.logo} source={{ uri: item.thumbnail }} />
        </View>
      )}
    />
  );
}
