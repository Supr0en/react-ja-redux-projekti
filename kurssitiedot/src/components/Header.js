import Content from './Content';

const Header = ( {courses} ) => {
    console.log(courses);
    return(
        <div>
        <hr></hr>
            <p>header toimii</p>
            <Content courses={courses} />
        </div>
    );
}
export default Header;