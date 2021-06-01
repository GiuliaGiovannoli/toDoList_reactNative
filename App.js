import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native'; 

import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';

import CategoriesGrid from './components/CategoriesGrid';
import Header from './components/Header'


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <>
    <Header />
    <CategoriesGrid />
    </>
    );
  }
};

