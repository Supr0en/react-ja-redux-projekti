import './App.css';
import React from 'react';

const App = () => {
  const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
  ]
  const orders = [
    { product: "apple", amount: 250 },
    { product: "orange", amount: 400 },
    { product: "banana", amount: 100 },
    { product: "mango", amount: 325 }
  ]
  let totalAmount = 0;
  var names = [];
  var dogs = [];
  var otherAnimals = [];

  //console.log(animals);

  // 1. Hae kaikki koirat(dogs) joukosta elaimet(animals) 

  // for (var i=0; i < animals.length; i++){
  //  if(animals[i].species === 'dog')
  //  dogs.push(animals[i])
  // }

  // console.log(animals);
  // console.log(dogs);

  // var isDog = function(animal) {
  //  return animal.species === 'dog'
  // }

  // dogs = animals.filter(isDog);

  // console.log(animals);
  // console.log(dogs);

  // 2. Hae joukosta kaikki muut eläimet (animals) paitsi koirat (dogs)

  // for (var i=0; i < animals.length; i++){
  //  if(animals[i].species !== 'dog')
  //  otherAnimals.push(animals[i])
  // }
  
  // console.log(animals);
  // console.log(otherAnimals);

  // var notDog = function(animal){
  //   return animal.species !== 'dog'
  // }
  // otherAnimals = animals.filter(notDog);
  
  // console.log(animals);
  // console.log(otherAnimals);

  // 3. Hae kaikkien eläimien (animals) nimet

  // for (var i=0; i < animals.length; i++){
  //  names.push(animals[i].name)
  // }
  // console.log(animals);
  // console.log(names);

  // animals.map(animal => {
  //  names.push(animal.name);
  // });
  // console.log(animals);
  // console.log(names);

  // 4. Laske kaikkien tietueiden amount-kentän arvot yhteen
  
  // for (let i = 0; i < orders.length; i++){
  //  totalAmount += orders[i].amount
  // }
  // console.log(orders);
  // console.log(totalAmount); 

  // let total = orders.reduce(function(preveiousValue,currentValue){
  //  return preveiousValue + currentValue.amount;
  // }, 0);
  // console.log(orders);
  // console.log(total);

  return (
    <section className="App">
    </section>
  );
}

export default App;
