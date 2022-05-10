import React from 'react';
import Note from './components/Note';
import {useState} from 'react';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  
  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };
    console.log(noteObject);
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
  ? notes
  : notes.filter((note) => note.important === true );

  return (
    <div className="App">
    <section className='filter'>
      <p>Click to show {showAll ? "only important" : "all"} notes </p>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show
          {showAll ? " important" : " all"}
        </button>
      </div>
    </section>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
         <Note key={note.id} note={note} />
        ))}
      </ul>

      <section className='addNewNote'>
        <form onSubmit={addNote}>
          <h2>Add new note</h2>
          <input 
            placeholder={'write a note hear!'}
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type='submit'>Save</button>
        </form>
      </section>
    </div>
  );
}

export default App;
