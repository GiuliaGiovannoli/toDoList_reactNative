import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { ListOfNotesContext } from '../context/NotesArrayContext'


export default function NotesScreen (props) {

  const listOfNotes = useContext(ListOfNotesContext)

  console.log(listOfNotes.arrayNote)
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listOfNotes.arrayNote && listOfNotes.arrayNote}
        renderItem={itemData => (
          itemData.item.toDo ? 
          (<View style={styles.listItem}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <Text style={styles.info}>{itemData.item.info}</Text>
            <View style={styles.buttons}>
            <Button title="doing" />
            <Button title="open" />
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
  },
});

