import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
  product: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    margin: 10,
  },
});
