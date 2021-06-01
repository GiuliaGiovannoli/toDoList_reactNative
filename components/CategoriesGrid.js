import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native'; 

import { AntDesign } from '@expo/vector-icons';


export default function CategoriesGrid() {

    return (
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
        <View style={styles.button}>
        <Button
          style={styles.category} title="TO DO" />
          <AntDesign style={styles.icon} name="pluscircleo" size={36} color="white" />
        </View>
        <View style={styles.button}>
        <Button
          style={styles.category} title="DOING" />
          <AntDesign style={styles.icon} name="pluscircleo" size={36} color="white" />
        </View>
        <View style={styles.button}>
        <Button
          title="DONE" style={styles.category} />
          <AntDesign style={styles.icon} name="pluscircleo" size={36} color="white" />
        </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    margin: 12,
    padding: 12,
  },
  categoryContainer: {
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#deeeea',
    borderRadius: 5,
    marginBottom: 36,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-around',
  },
  category: {
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});
