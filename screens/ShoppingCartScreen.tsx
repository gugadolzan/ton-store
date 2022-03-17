import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';

import ProductItem from '../components/ProductItem';
import ShoppingCartContext from '../context/ShoppingCartContext';
import styles from '../styles';
import currency from '../utils/currencyFormatter';

export default function ShoppingCartScreen() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  if (shoppingCart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noProductsInCart}>Nenhum produto no carrinho!</Text>
      </View>
    );
  }

  /**
   * Calculates the total price of the shopping cart
   */
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
        <Text style={styles.totalInCartValue}>
          {currency.format(totalInCart)}
        </Text>
      </Text>
      <FlatList
        data={shoppingCart}
        keyExtractor={({ product: { id } }) => id}
        renderItem={({ item }) => <ProductItem product={item.product} />}
      />
    </View>
  );
}
