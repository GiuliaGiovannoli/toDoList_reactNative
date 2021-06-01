import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function NotesScreen (props) {

  return (
    <View style={styles.header}>
      <Text style={styles.title} onPress={(e) => {props.navigation.navigate('Detail')}}>i m visible</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#deeeea',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title: {
    fontFamily: 'Montserrat_400Regular_Italic',
    fontSize: 24,
    color: 'black',
  }
});

