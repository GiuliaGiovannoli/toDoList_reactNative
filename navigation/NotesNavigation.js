import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen'
import NotesScreen from '../screens/NotesScreen'
import DetailScreen from '../screens/DetailScreen'

const MyStack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: '#deeeea',
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat_400Regular_Italic',
    fontSize: 24,
    textTransform: 'uppercase'
  },
  headerBackTitleStyle: {
    fontFamily: 'Montserrat_200ExtraLight',
    fontSize: 20,
  },
  headerTintColor: '#f4a9a8',
}

export default function NotesNavigation() {
  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={defaultNavOptions}>
      <MyStack.Screen name="Lists" component={CategoriesScreen} />
      <MyStack.Screen name="Notes" component={NotesScreen} />
      <MyStack.Screen name="Detail" component={DetailScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}
