import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, Pressable } from 'react-native'; 


export default function CategoriesScreen(props) {

    return (
      <View style={styles.container}>
      <Pressable
          style={styles.category}  
          onPress={(e) => {props.navigation.navigate('Notes')}}>
        <ImageBackground style={styles.image} source={require('../assets/todo.jpg')}>
            <View style={styles.textContainer}><Text style={styles.text}>TO DO </Text></View>
        </ImageBackground>
        </Pressable>
        <Pressable
          style={styles.category}  
          onPress={(e) => {props.navigation.navigate('Notes')}}>
        <ImageBackground style={styles.image} source={require('../assets/doing.jpg')}>
        <View style={styles.textContainer}><Text style={styles.text}>DOING</Text></View>
        </ImageBackground>
        </Pressable>
        <Pressable
          style={styles.category}   
          onPress={(e) => {props.navigation.navigate('Notes')}}>
        <ImageBackground style={styles.image} source={require('../assets/done.jpg')} onPress={(e) => {props.navigation.navigate('Notes')}}>
        <View style={styles.textContainer}><Text style={styles.text}>DONE!</Text></View>
        </ImageBackground>
        </Pressable>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'space-between',
    margin: 12,
    padding: 12,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 15,
    marginBottom: 36,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  category: {
    alignSelf: 'center',
  },
  textContainer: {
    width: 135,
    height: 40,
    backgroundColor: '#deeeea',
    borderBottomRightRadius: 10,
  },
  text: {
    fontFamily: 'Montserrat_400Regular_Italic',
    fontSize: 32,
    color: '#f4a9a8',
    textAlign: 'center'
  }
});