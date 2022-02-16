import React from 'react';
import './Gameover.css';

const Gameover = (props) => {
    const score = props.scoreCallback();
    
    return(
      <div id="overlay">
        <div id="gameover">Your score: <br/>{score}
        <button id="startgame" onClick={ props.startCallback }>New Game</button></div>
      </div>
    );
  }

export default Gameover;