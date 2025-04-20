import { Slot } from 'expo-router';
import React from 'react';
import '../../global.css';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#010D1A',
    card: '#010D1A',
    primary: 'white',
  },
};

const RootLayout = () => {
  return (
    <ThemeProvider value={theme}>
      <ClerkProvider tokenCache={tokenCache}>
        <Slot />
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
