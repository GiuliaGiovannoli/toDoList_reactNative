import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, Pressable, TouchableOpacity, TextInput, 
  Keyboard } from 'react-native'; 

  import { Entypo } from '@expo/vector-icons'; 

import { ListOfNotesContext } from '../context/NotesArrayContext'


export default function DetailScreen ({navigation, route }) {

  const listOfNotes = useContext(ListOfNotesContext)

  const { param } = route.params

  const rigthNote = listOfNotes.arrayNote && listOfNotes.arrayNote.filter((el) => el.id === param)

  const [newNote, setNewNote]= useState({})

  function editingNote() {
    let updatedArray = listOfNotes.arrayNote && listOfNotes.arrayNote.map((one) => {
      if (one.id === rigthNote[0].id) {
        if(newNote && newNote.title && newNote.title.length > 0) {
        return {...one, title: newNote && newNote.title }
      }} else if(newNote && newNote.info && newNote.info.length > 0) {
        return {...one, info: newNote && newNote.info }
      } else return one
    }) 
    listOfNotes.setArrayNote(updatedArray)

  }


  return (
    
      <View style={styles.card}>
      <Text style={styles.header}>Note nr. { param }</Text>
      <View style={styles.title}>
      <Text style={{ color: 'grey', fontSize: 24, fontFamily: 'Montserrat_200ExtraLight,' }}>{ rigthNote[0].title }</Text>
      <Text style={{ color: 'grey', fontSize: 12, fontFamily: 'Montserrat_200ExtraLight,', marginTop: 5 }}>Insert here new title</Text>
        <TextInput style={styles.input} onPress={() => {Keyboard.keyboardWillShow()}} 
        onChangeText={ inputText => inputText.length > 0 ? setNewNote({...newNote && newNote, title: inputText}) : setNewNote({...newNote && newNote, title: ''}) }
        value={ newNote.title } />
      </View>
      <View style={styles.infos}>
      <Text style={{ color: 'grey', fontSize: 24, fontFamily: 'Montserrat_200ExtraLight,' }}>{ rigthNote[0].info }</Text>
      <Text style={{ color: 'grey', fontSize: 12, fontFamily: 'Montserrat_200ExtraLight,', marginTop: 5 }}>Insert here new info</Text>
      <TextInput style={styles.input} 
      onChangeText={ inputText => inputText.length > 0 ? setNewNote({...newNote && newNote, info: inputText}) : setNewNote({...newNote && newNote, info: ''}) }
      value={ newNote.info } />
      </View>
      <View style={styles.buttons}>
        <Entypo name="save" size={48} color="grey" onPress={() => editingNote()} />
      </View>
      </View>

  )
}

const styles = StyleSheet.create({
  header: {
    margin: 5,
    color: '#f4a9a8',
    textAlign: 'center',
    fontSize: 24, 
    fontFamily: 'Montserrat_200ExtraLight,',
  }, 
  card: {
    margin: 24,
    borderWidth: 1,
    borderColor: '#f4a9a8',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: '85%',
    height: '85%',
  }, 
  title: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-around'
  },
  infos: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-around'
  },
  buttons: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    marginTop: 20,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#f4a9a8',
  },
});

