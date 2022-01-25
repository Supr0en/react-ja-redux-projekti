import './Person.css';

const Person = (props) => {
  return (
    <section className="person">
      <p>Hello, my name is {props.name}, and I am {props.age} old.</p>
    </section>
  );
}

export default Person;