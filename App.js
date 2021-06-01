import React, { useState, useEffect } from 'react';

import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading'

import NotesNavigation from './navigation/NotesNavigation';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <NotesNavigation />
    );
  }
};
