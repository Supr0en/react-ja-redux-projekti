import React from "react";


const Comp1 = (props) => {
  return(
    <section className="boksi">
      <h1>{props.nimi}</h1>
      <p>Title:{props.title}</p>
      <p>Ikä:{props.ika}</p>
    </section>
  );
}

const App = () => {
  return (
    <section className="area">
      <Comp1 nimi="Maria" title="CEO" ika="29"/>
      <Comp1 nimi="Kati" title="Developper" ika="25"/>
      <Comp1 nimi="Karin" title="Desiner" ika="45"/>
    </section>
  )
}

export default App;