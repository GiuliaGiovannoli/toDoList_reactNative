import React, { useState, useEffect } from 'react';

const ListOfNotesContext = React.createContext();

const ListOfNotesProvider = (props) => {

  const [note, setNote] = useState({});

  const [arrayNote, setArrayNote] = useState([])
  

  return (
    <ListOfNotesContext.Provider
      value={{
        note, setNote,
        arrayNote, setArrayNote
      }}
    >
      {props.children}
    </ListOfNotesContext.Provider>
  )
}

export { ListOfNotesProvider, ListOfNotesContext };