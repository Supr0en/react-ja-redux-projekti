import Part from './Part';

const Content = ( {courses} ) => {
    console.log(courses);

    return(
        <div>
        <h1>{courses.name}</h1>
        <p>Content Toimii</p>
        <Part courses={courses} />
        </div>
    )
}

export default Content;