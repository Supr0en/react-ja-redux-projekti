const Total = ( {courses} ) => {
    const total = courses.parts.reduce((amount, current) =>{
        return amount + current.exercieses;
    }, 0);

    return(
        <p id="total">Total of {total} exercieses.</p>
    )

}
export default Total;