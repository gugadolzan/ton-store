import React from 'react';
import { Button, FlatList, Image, Text, View } from 'react-native';

import styles from '../styles';
import { IProduct, IProductsListProps } from '../types';

export default function ProductsList({
  products,
  shoppingCart,
  setShoppingCart,
}: IProductsListProps) {
  const addToCart = (product: IProduct) => {
    setShoppingCart([...shoppingCart, product]);
  };

  const removeFromCart = (product: IProduct) => {
    setShoppingCart(
      shoppingCart.filter((item: IProduct) => item.id !== product.id)
    );
  };

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
          {shoppingCart.find((p) => p.id === item.id) ? (
            <Button
              title="Remover do carrinho"
              onPress={() => removeFromCart(item)}
            />
          ) : (
            <Button
              title="Adicionar ao carrinho"
              onPress={() => addToCart(item)}
            />
          )}
        </View>
      )}
    />
  );
}
