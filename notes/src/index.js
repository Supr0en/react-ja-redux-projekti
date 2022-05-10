import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.0982",
    important: true

  },
  {
    id: 2,
    content: "Browser con execure only JavaScript",
    date: "2019-05-30T18:39:34.0912",
    important: false

  },
  {
    id: 3,
    content: "GET and POST are the most important methdods of HTTP protocol",
    date: "2019-05-30T19:20:14.2982",
    important: true

  }
]
ReactDOM.render(
  <React.StrictMode>
    <App notes={notes} />
   </React.StrictMode>,
  document.getElementById( 'root' )
);
