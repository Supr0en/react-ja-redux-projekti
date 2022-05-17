import { useState } from 'react';
import './App.css';
import Contact from './components/contacts';

const App = ( props ) => {
  const [persons, setPersons] = useState(props.persons);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showFilter, setFilterPerson] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewPerson(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  
  const handleFilterChange = (event) =>{
    if(event.target.value === ''){
      setShowAll(true);
    } else {
      setShowAll(false);
    }
    setFilterPerson(event.target.value);
  };

  const personsToShow = showAll ? persons : persons.filter((person) => person.name.toLowerCase().includes(showFilter));


  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const contactObject = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(contactObject));
    setPersons(persons.concat(contactObject));
    setNewPerson("");
    setNewNumber("");
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      Filter:<input
        placeholder={'filter'}
        value={showFilter}
        onChange={handleFilterChange}
      />
      <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
        Name:<input 
            placeholder={'Write contact hear!'}
            value={newPerson}
            onChange={handlePersonChange}
        />
        Number:<input
            placeholder={'write number here!'}
            value={newNumber}
            onChange={handleNumberChange}
        />
            <button type='submit'>Add</button>
      </form>
      <ul>
        {personsToShow.map((person) =>(
          <Contact key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
}

export default App;
