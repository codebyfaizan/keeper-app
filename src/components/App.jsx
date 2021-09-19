import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [savedNotes, setSavedNotes] = React.useState([]);

  function addNote(inputNote) {
    setSavedNotes([...savedNotes, inputNote]);
  }

  function deleteNote(id){
setSavedNotes(savedNotes.filter((noteToBeDeleted, index) => index!==id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {savedNotes.map((inputNote, index) => (
        <Note key={index} id={index} title={inputNote.title} content={inputNote.content} onDelete={deleteNote}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
