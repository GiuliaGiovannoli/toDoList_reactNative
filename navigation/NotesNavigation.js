import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons'; 

import CategoriesScreen from '../screens/CategoriesScreen'
import NotesScreen from '../screens/NotesScreen'
import DetailScreen from '../screens/DetailScreen'
import AddNew from '../screens/AddNew'

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

function Router() {
return (
      <MyStack.Navigator screenOptions={defaultNavOptions}>
      <MyStack.Screen name="Lists" component={CategoriesScreen} />
      <MyStack.Screen name="Notes" component={NotesScreen} />
      <MyStack.Screen name="Detail" component={DetailScreen} />
      </MyStack.Navigator>
      )
}

const Tab = createBottomTabNavigator();


export default function NotesNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'NEW') {
              return <AntDesign name="pluscircleo" size={36} color="grey" />
            } else if (route.name === 'LISTS') {
              return <AntDesign name="bars" size={36} color="grey" />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="LISTS" component={Router} />
        <Tab.Screen name="NEW" component={AddNew} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
