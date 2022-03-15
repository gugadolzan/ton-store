import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ShoppingCartProvider from './context/ShoppingCartProvider';
import Navigation from './navigation';

export default function App() {
  return (
    <ShoppingCartProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ShoppingCartProvider>
  );
}
