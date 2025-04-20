import { Slot } from 'expo-router';
import React from 'react';
import '../../global.css';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'red',
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
