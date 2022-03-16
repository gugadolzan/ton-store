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
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Text>
            {item.title}, {item.price}
          </Text>
          <Image style={styles.logo} source={{ uri: item.thumbnail }} />

          {!shoppingCart.find(({ product }) => product.id === item.id) ? (
            <Pressable style={styles.buttonAdd} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
            </Pressable>
          ) : (
            <View>
              <Pressable
                style={styles.buttonAdd}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
              <Text>
                {
                  shoppingCart.find(({ product }) => product.id === item.id)
                    ?.quantity
                }
              </Text>
              <Pressable
                style={styles.buttonRemove}
                onPress={() => removeFromCart(item)}
              >
                <Text style={styles.buttonText}>-</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    />
  );
}
