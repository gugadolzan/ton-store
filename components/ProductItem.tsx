import React, { useContext } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';
import { IProductItemProps } from '../types';

export default function ProductItem({ product }: IProductItemProps) {
  const { addToCart, removeFromCart, shoppingCart } =
    useContext(ShoppingCartContext);

  return (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Image
          style={styles.productImage}
          source={{ uri: product.thumbnail }}
        />
        <View>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
      {!shoppingCart.find((item) => item.product.id === product.id) ? (
        <Pressable
          style={styles.buttonAddToCart}
          onPress={() => addToCart(product)}
        >
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </Pressable>
      ) : (
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.buttonPlus}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.buttonSign}>+</Text>
          </Pressable>
          <Text style={styles.quantity}>
            {
              shoppingCart.find((item) => item.product.id === product.id)
                ?.quantity
            }
          </Text>
          <Pressable
            style={styles.buttonMinus}
            onPress={() => removeFromCart(product)}
          >
            <Text style={styles.buttonSign}>-</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
