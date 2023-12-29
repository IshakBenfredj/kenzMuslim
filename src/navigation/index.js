

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import QuranSurasScreen from '../screens/QuranSurasScreen';
import SuraScreen from '../screens/SuraScreen';
import AzkarCateg from '../screens/AzkarCateg';
import AzkarsScreen from '../screens/AzkarsScreen';
import ImamsList from '../screens/ImamsList';
import Chapters from '../screens/Chapters';
import HadithsScreen from '../screens/HadithsScreen';
import Misbaha from '../screens/Misbaha';
import KodosiScreen from '../screens/KodosiScreen';
import Ahadith40 from '../screens/Ahadith40';
import GodNamesScreen from '../screens/GodNamesScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QuranSuras" component={QuranSurasScreen} />
        <Stack.Screen name="Sura" component={SuraScreen} />
        <Stack.Screen name="AzkarCateg" component={AzkarCateg} />
        <Stack.Screen name="Azkars" component={AzkarsScreen} />
        <Stack.Screen name="ImamsList" component={ImamsList} />
        <Stack.Screen name="Chapters" component={Chapters} />
        <Stack.Screen name="Hadiths" component={HadithsScreen} />
        <Stack.Screen name="Misbaha" component={Misbaha} />
        <Stack.Screen name="Kodosi" component={KodosiScreen} />
        <Stack.Screen name="Ahadith40" component={Ahadith40} />
        <Stack.Screen name="GodNames" component={GodNamesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;


