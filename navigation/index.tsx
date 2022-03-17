import React from 'react';
import { Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#00ad0c' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Loja do Ton',
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('ShoppingCart')}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <Image
                  source={{ uri: 'https://img.icons8.com/ios-filled/50/FFFFFF/shopping-cart.png' }}
                  style={{ width: 30, height: 30 }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{ title: 'Carrinho de compras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
