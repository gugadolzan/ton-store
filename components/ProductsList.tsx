import React, { useContext } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';
import { IProductsListProps } from '../types';

export default function ProductsList({ products }: IProductsListProps) {
  const { addToCart, removeFromCart, shoppingCart } =
    useContext(ShoppingCartContext);

  return (
    <FlatList
      data={products}
      keyExtractor={({ id }) => id}
      style={styles.productsList}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <View style={styles.productInfo}>
            <Image
              style={styles.productImage}
              source={{ uri: item.thumbnail }}
            />
            <View>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>
                R$ {item.price.toFixed(2).replace('.', ',')}
              </Text>
            </View>
          </View>
          {!shoppingCart.find(({ product }) => product.id === item.id) ? (
            <Pressable
              style={styles.buttonAddToCart}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
            </Pressable>
          ) : (
            <View style={styles.buttonsContainer}>
              <Pressable
                style={styles.buttonPlus}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.buttonSign}>+</Text>
              </Pressable>
              <Text style={styles.quantity}>
                {
                  shoppingCart.find(({ product }) => product.id === item.id)
                    ?.quantity
                }
              </Text>
              <Pressable
                style={styles.buttonMinus}
                onPress={() => removeFromCart(item)}
              >
                <Text style={styles.buttonSign}>-</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    />
  );
}
