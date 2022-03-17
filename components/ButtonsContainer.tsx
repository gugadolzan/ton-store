import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import ShoppingCartContext from '../context/ShoppingCartContext';

import styles from '../styles';
import { IProductProps } from '../types';

export default function ButtonsContainer({ product }: IProductProps) {
  const { addToCart, removeFromCart, shoppingCart } =
    useContext(ShoppingCartContext);

  return (
    <View style={styles.buttonsContainer}>
      <Pressable style={styles.buttonPlus} onPress={() => addToCart(product)}>
        <Text style={styles.buttonSign}>+</Text>
      </Pressable>
      <Text style={styles.quantity}>
        {shoppingCart.find((item) => item.product.id === product.id)?.quantity}
      </Text>
      <Pressable
        style={styles.buttonMinus}
        onPress={() => removeFromCart(product)}
      >
        <Text style={styles.buttonSign}>-</Text>
      </Pressable>
    </View>
  );
}
