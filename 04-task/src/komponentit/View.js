import React, {useState} from "react";
import './View.css';
import Form from "./Form";

const View = (props) => {
  
  const [title, setTittle] = useState('')

  return (
    <div className="View">
      <h2>This is your input:</h2>
      <form>
        <div className="mb-3">
          <p><span className="form-label">Etunimi: </span>{props.eNimi}</p>
        </div>
        <div className="mb-3">
          <p><span className="form-label">Sukunimi: </span>{props.sNimi}</p>
        </div>
        <div className="mb-3">
          <p><span className="form-label">Puhelin: </span>{props.puh}</p>
        </div>
        <div className="mb-3">
          <p><span className="form-label">Message: </span>{props.msg}</p>
        </div>
      </form>
    </div>
  );
}

export default View;
