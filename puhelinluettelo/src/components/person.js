import Contact from "./contacts";
const Person = ({personsToShow}) => {

    return(
        <section>
            {personsToShow.map((person) =>(
                <Contact key={person.id} person={person} />
            ))}
        </section>
    )
}

export default Person;