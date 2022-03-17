import React, { useContext } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import ButtonsContainer from './ButtonsContainer';
import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';
import { IProductProps } from '../types';
import currency from '../utils/currencyFormatter';

export default function ProductItem({ product }: IProductProps) {
  const { addToCart, shoppingCart } = useContext(ShoppingCartContext);

  return (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Image
          style={styles.productImage}
          source={{ uri: product.thumbnail }}
          testID="product-image"
        />
        <View>
          <Text style={styles.productTitle} testID="product-title">
            {product.title}
          </Text>
          <Text style={styles.productPrice} testID="product-price">
            {currency.format(product.price)}
          </Text>
        </View>
      </View>
      {!shoppingCart.find((item) => item.product.id === product.id) ? (
        <Pressable
          style={styles.buttonAddToCart}
          onPress={() => addToCart(product)}
          testID="add-to-cart"
        >
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </Pressable>
      ) : (
        <ButtonsContainer product={product} />
      )}
    </View>
  );
}
