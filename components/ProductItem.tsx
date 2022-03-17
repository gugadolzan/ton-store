import React, { useContext } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';
import { IProductProps } from '../types';
import ButtonsContainer from './ButtonsContainer';

export default function ProductItem({ product }: IProductProps) {
  const { addToCart, shoppingCart } = useContext(ShoppingCartContext);

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
        <ButtonsContainer product={product} />
      )}
    </View>
  );
}
