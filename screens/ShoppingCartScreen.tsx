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

  const totalInCart = shoppingCart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <View style={styles.productsList}>
      <Text style={styles.productsInCart}>
        {shoppingCart.length} produto(s) adicionado(s) ao carrinho
      </Text>
      <Text style={styles.totalInCart}>
        {'Total: '}
        <Text style={styles.totalInCartValue}>R$ {totalInCart.toFixed(2)}</Text>
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
