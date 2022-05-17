const Contact = ({ person }) => {
    return (
        <section>
            <li>{person.name}, {person.number}</li>
        </section>
    )
}
export default Contact