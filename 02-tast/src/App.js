import './App.css';
import Person from './person/Person';

const personel = [
  {name: "kiera", age:1},
  {name: "casper", age:17},
  {name: "tomi", age:17}
]

const App = () => {
  return (
    <div className="App">
      <Person name={personel[0].name} age={personel[0].age} />
      <Person name={personel[1].name} age={personel[1].age} />
      <Person name={personel[2].name} age={personel[2].age} />
    </div>
  );
}

export default App;
