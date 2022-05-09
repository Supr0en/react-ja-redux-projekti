import Header from "./Header";
import Total from './Total';

const Course = ( {courses} ) => {
    console.log(courses);
    
    return(
        <div>
        <hr></hr>
            <p>Course.js toimii</p>
            <Header courses={courses} />
            <Total key={courses.id} courses={courses} />
        </div>
    );
}

export default Course;