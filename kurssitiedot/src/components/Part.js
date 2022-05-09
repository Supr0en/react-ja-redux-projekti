const Part = ({ courses }) => {
    return (
        <div>
            {courses.parts.map(part =>
            <div>
            <hr></hr>
                <p>Part toimii</p>    
                <label>{part.name} {part.exercieses}</label>
            </div>
            )}
        </div>
    );
};

export default Part;
