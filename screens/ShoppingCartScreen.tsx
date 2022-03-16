import React, { useContext } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';

export default function ShoppingCartScreen() {
  const { addToCart, removeFromCart, shoppingCart } = useContext(ShoppingCartContext);

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
        keyExtractor={({ product: { id } }) => id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>
              {item.product.title}, {item.product.price}
            </Text>
            <Image style={styles.logo} source={{ uri: item.product.thumbnail }} />
            <View>
              <Pressable
                style={styles.buttonAdd}
                onPress={() => addToCart(item.product)}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
              <Text>
                {
                  shoppingCart.find(({ product }) => product.id === item.product.id)
                    ?.quantity
                }
              </Text>
              <Pressable
                style={styles.buttonRemove}
                onPress={() => removeFromCart(item.product)}
              >
                <Text style={styles.buttonText}>-</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}
