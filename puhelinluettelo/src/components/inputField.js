const InputField = ({FilterChange}) =>{
 return(
    <section>
    <label>Filter:</label>
        <input
            placeholder={'filter'}
            onChange={FilterChange}
        />
    </section>
 );
}

export default InputField;