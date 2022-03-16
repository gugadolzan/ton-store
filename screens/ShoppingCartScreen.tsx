import React, { useContext } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

import styles from '../styles';
import ShoppingCartContext from '../context/ShoppingCartContext';
import { IProduct } from '../types';

export default function ShoppingCartScreen() {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const removeFromCart = (product: IProduct) => {
    setShoppingCart(
      shoppingCart.filter((item: IProduct) => item.id !== product.id)
    );
  };

  if (shoppingCart.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhum produto no carrinho!</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{shoppingCart.length} produtos adicionados:</Text>
      <FlatList
        data={shoppingCart}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>
              {item.title}, {item.price}
            </Text>
            <Image style={styles.logo} source={{ uri: item.thumbnail }} />
            <Pressable
              style={styles.buttonRemove}
              onPress={() => removeFromCart(item)}
            >
              <Text style={styles.buttonText}>Remover do carrinho</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
