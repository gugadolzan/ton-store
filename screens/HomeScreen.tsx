import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { IProduct } from '../types';
import ProductsList from '../components/ProductsList';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const query = 'maquininha';
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
      );
      const { results } = await response.json();
      setProducts(results.slice(0, 12));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <ProductsList products={products} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
