const PersonForm = ( {addPerson, newPerson, newNumber, personChange, numberChange} ) =>{
    
    return(
        <section>
            <form onSubmit={addPerson}>
        <label>Name:</label>
        <input 
            placeholder={'Write contact hear!'}
            value={newPerson}
            onChange={personChange}
        />
        <label>Number:</label>
        <input
            placeholder={'write number here!'}
            value={newNumber}
            onChange={numberChange}
        />
            <button type='submit'>Add</button>
      </form>
        </section>
    )
}

export default PersonForm;