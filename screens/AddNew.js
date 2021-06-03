import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, Pressable, TouchableOpacity, TextInput, 
  Keyboard } from 'react-native'; 

  import { Entypo } from '@expo/vector-icons'; 
  import { MaterialIcons } from '@expo/vector-icons'; 

import { ListOfNotesContext } from '../context/NotesArrayContext'


export default function AddNew (props) {

  const listOfNotes = useContext(ListOfNotesContext)

  const handleSubmitNote = () => {
    Keyboard.dismiss()
    if(listOfNotes.note.title.length > 0) {
    listOfNotes.setNote({...listOfNotes.note && listOfNotes.note, id: listOfNotes.arrayNote && listOfNotes.arrayNote.length > 0 ? listOfNotes.arrayNote.length +1 : 1, 
      toDo: true, doing: false, done: false })
    listOfNotes.setArrayNote([...listOfNotes.arrayNote && listOfNotes.arrayNote, listOfNotes.note])
    } else {
      window.alert('Title required')
    }
  }

  function handleResetNote() {
    listOfNotes && listOfNotes.setNote({ title: '', info: '' })
  }


  return (
    
    <View>
      <View style={styles.header}>
        <Text style={{ color: '#deeeea' }}>ADD NEW NOTE</Text>
      </View>
      <View style={styles.card}>
      <View style={styles.title}>
      <Text style={{ color: '#f4a9a8', fontSize: 24, fontFamily: 'Montserrat_200ExtraLight,' }}>ADD TITLE</Text>
        <TextInput style={styles.input} onPress={() => {Keyboard.keyboardWillShow()}} 
        onChangeText={ inputText => inputText.length > 0 ? listOfNotes.setNote({...listOfNotes.note && listOfNotes.note, title: inputText}) : null}
        value={ listOfNotes.note && listOfNotes.note.title } />
      </View>
      <View style={styles.infos}>
      <Text style={{ color: '#f4a9a8', fontSize: 24, fontFamily: 'Montserrat_200ExtraLight,' }}>ADD INFO</Text>
      <TextInput style={styles.input} 
      onChangeText={ inputText => listOfNotes.setNote({...listOfNotes.note && listOfNotes.note, info: inputText})}
      value={ listOfNotes.note && listOfNotes.note.info } />
      </View>
      <View style={styles.buttons}>
      <MaterialIcons name="cancel" size={48} color="grey" onPress={() => handleResetNote()} />
        <Entypo name="save" size={48} color="grey" onPress={handleSubmitNote} />
      </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({ 
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f4a9a8',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  card: {
    margin: 12,
    padding: 12,
    width: '85%',
    height: '85%',
    borderRadius: 20,
    backgroundColor: '#deeeea',
    alignSelf: 'center',
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