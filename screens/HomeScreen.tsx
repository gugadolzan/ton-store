import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import ProductsList from '../components/ProductsList';
import styles from '../styles';
import { IProduct } from '../types';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      // Personal API created by me
      const response = await fetch('https://ton-api-1211.herokuapp.com/');
      const products = await response.json();
      setProducts(products);
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
