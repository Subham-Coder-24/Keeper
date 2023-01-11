import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(note) {
    setnotes(prenotes => {
      return [...prenotes, note];
    });
  }
  function deletenote(id){
    setnotes(prenotes=>{
      return prenotes.filter((noteitem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((noteitem,index) => {
        return (
          <Note
            key={index}
            id={index }
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deletenote}
          />)
      })}

      <Footer />
    </div>
  );
}

export default App;
