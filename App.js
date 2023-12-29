import React from 'react';
import AppNavigation from './src/navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'amiri-regular': require('./assets/fonts/Amiri-Regular.ttf'),
    'amiri-bold': require('./assets/fonts/Amiri-Bold.ttf'),
    'amiri-boldItalic': require('./assets/fonts/Amiri-BoldItalic.ttf'),
    'amiri-italic': require('./assets/fonts/Amiri-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <AppNavigation />
    );
  }
}