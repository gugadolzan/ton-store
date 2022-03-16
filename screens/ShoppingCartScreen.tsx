import React, { useContext } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';

export default function ShoppingCartScreen() {
  const { addToCart, removeFromCart, shoppingCart } =
    useContext(ShoppingCartContext);

  if (shoppingCart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noProductsInCart}>Nenhum produto no carrinho!</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.productsInCart}>
        {shoppingCart.length} produtos adicionados:
      </Text>
      <FlatList
        data={shoppingCart}
        keyExtractor={({ product: { id } }) => id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View style={styles.productInfo}>
              <Image
                style={styles.productImage}
                source={{ uri: item.product.thumbnail }}
              />
              <View>
                <Text style={styles.productTitle}>{item.product.title}</Text>
                <Text style={styles.productPrice}>
                  R$ {item.product.price.toFixed(2).replace('.', ',')}
                </Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.buttonPlus}
                onPress={() => addToCart(item.product)}
              >
                <Text style={styles.buttonSign}>+</Text>
              </Pressable>
              <Text style={styles.quantity}>
                {
                  shoppingCart.find(
                    ({ product }) => product.id === item.product.id
                  )?.quantity
                }
              </Text>
              <Pressable
                style={styles.buttonMinus}
                onPress={() => removeFromCart(item.product)}
              >
                <Text style={styles.buttonSign}>-</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}
