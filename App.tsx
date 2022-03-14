import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export default function App() {
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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={products}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.title}, {item.price}
              </Text>
              <Image style={styles.logo} source={{ uri: item.thumbnail }} />
            </View>
          )}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 58,
    width: 66,
  },
});
