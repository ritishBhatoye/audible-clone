import { Slot } from 'expo-router';
import React from 'react';
import '../../global.css';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';

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
      <Slot />
    </ThemeProvider>
  );
};

export default RootLayout;
