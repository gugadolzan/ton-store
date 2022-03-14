import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Boas-vindas à Loja Online' }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{ title: 'Carrinho de Compras' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
