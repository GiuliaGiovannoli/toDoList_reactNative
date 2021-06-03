import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { ListOfNotesContext } from '../context/NotesArrayContext'


export default function NotesScreen ({navigation, route }) {

  const listOfNotes = useContext(ListOfNotesContext)

  const { param } = route.params

  function moveToDoing(item) {
    if(item.toDo === true && item.doing === false) {
    let updatingArray = listOfNotes.arrayNote && listOfNotes.arrayNote.map((one) => {
      if(one.id === item.id) {
        return {...item, toDo: false, doing: true}
      } else return one
    })
    listOfNotes.setArrayNote(updatingArray)}
  }

  function moveBackToDo(item) {
    if(item.toDo === false && item.doing === true) {
    let updatingArray = listOfNotes.arrayNote && listOfNotes.arrayNote.map((one) => {
      if(one.id === item.id) {
        return {...item, toDo: true, doing: false}
      } else return one
    })
    listOfNotes.setArrayNote(updatingArray)}
  }

  function moveToDone(item) {
    if(item.toDo === false && item.doing === true && item.done === false) {
    let updatingArray = listOfNotes.arrayNote && listOfNotes.arrayNote.map((one) => {
      if(one.id === item.id) {
        return {...item, toDo: false, doing: false, done: true}
      } else return one
    })
    listOfNotes.setArrayNote(updatingArray)}
  }

  function deleteNote(item) {
    if(item.toDo === false && item.doing === false && item.done === true) {
    let updatingArray = listOfNotes.arrayNote && listOfNotes.arrayNote.map((one) => {
      if(one.id === item.id) {
        return {...item, toDo: false, doing: false, done: false}
      } else return one
    })
    listOfNotes.setArrayNote(updatingArray)}
  }

  function handleEditing(item) {
    navigation.navigate('Detail', {param: item.id})
  }


  return (
    <View style={styles.container}>
    <Text style={styles.header}>{ param }</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listOfNotes.arrayNote && listOfNotes.arrayNote}
        renderItem={itemData => (
          param === 'toDo' && itemData.item.toDo ? 
          (<View style={styles.listItem}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <Text style={styles.info}>{itemData.item.info}</Text>
            <View style={styles.buttons}>
            <AntDesign name="export" size={36} color="grey" onPress={() => moveToDoing(itemData.item)} />
          <MaterialCommunityIcons name="square-edit-outline" size={36} color="grey" onPress={() => handleEditing(itemData.item)} />
            </View>
          </View>) 
          : param === 'doing' && itemData.item.doing ? 
          (<View style={styles.listItem}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <Text style={styles.info}>{itemData.item.info}</Text>
            <View style={styles.buttons}>
            <AntDesign name="export2" size={36} color="grey" onPress={() => moveBackToDo(itemData.item)} />
            <MaterialCommunityIcons name="square-edit-outline" size={36} color="grey" onPress={() => handleEditing(itemData.item)} />
            <AntDesign name="check" size={36} color="grey" onPress={() => moveToDone(itemData.item)} />
            </View>
          </View>) 
          : param === 'done' && itemData.item.done ? 
          (<View style={styles.listItem}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <Text style={styles.info}>{itemData.item.info}</Text>
            <View style={styles.buttons}>
            <AntDesign name="close" size={36} color="grey" onPress={() => deleteNote(itemData.item)} />
          <MaterialCommunityIcons name="square-edit-outline" size={36} color="grey" onPress={() => handleEditing(itemData.item)} />
            </View>
          </View>) 
          : null
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  }, 
  listItem: {
    borderWidth: 1,
    borderColor: '#f4a9a8',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: '100%',
    marginBottom: 8,
  },
  title: {
    fontSize: 24, 
    fontFamily: 'Montserrat_200ExtraLight,',
    textAlign: 'center',
  },
  info: {
    fontSize: 12, 
    fontFamily: 'Montserrat_200ExtraLight,',
    textAlign: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 24, 
    fontFamily: 'Montserrat_200ExtraLight,',
    textAlign: 'center',
    color: 'grey',
    textTransform: 'uppercase',
    margin: 5,
  },
});

