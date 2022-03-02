import "./Kysely.css";
import react, { useState } from "react";

const Kysely = (props) => {
  const [firstNumber, setfirstNumber] = useState(0);
  const [secondNumber, setsecondNumber] = useState(0);
  const [thirdNumber, setthirdNumber] = useState(0);

  return (
    <div className="kysely">
        
        <p>Mitä mieltä olet ollut palvelustamme</p>
        <button onClick={() => setfirstNumber(firstNumber + 1)}>Hyvä</button>
        <button onClick={() => setsecondNumber(secondNumber + 1)}>Kohtalaista</button>
        <button onClick={() => setthirdNumber(thirdNumber + 1)}>Huono</button>

        <h3>palauteet</h3>

        <p>Hyvää: {firstNumber}</p>
        <p>Kohtalaista: {secondNumber}</p>
        <p>Huonoa: {thirdNumber}</p>
        <p>Palautemäärä: {firstNumber + secondNumber + thirdNumber}</p>
        <p>Keskiarvo: {((firstNumber + secondNumber + thirdNumber) / 3).toFixed(2)}</p>
        <p>Positiivinen palaute: {(firstNumber / (firstNumber + secondNumber + thirdNumber) * 100).toFixed(1)}%</p>
    </div>
  );
};

export default Kysely;
