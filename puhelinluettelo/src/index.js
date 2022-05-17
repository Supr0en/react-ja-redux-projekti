import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './appComponenteilla';

const persons = [
  {
    id: 1,
    name: "Clark Kent",
    number: "123 4567"
  },
  {
    id: 2,
    name: "Loise Laina",
    number: "123 5678"
  },
  {
    id: 3,
    name: "Jimmy Olsen",
    number: "123 6789"
  },
  {
    id: 4,
    name: "Gerge Taylor",
    number: "123 7890"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>,
  document.getElementById("root")
);