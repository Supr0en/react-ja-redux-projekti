
import './View.css';

const View = (props) => {
  return (
    <div className="View">
      <h2>This is your input:</h2>
      <form>
          <p><span className="view-label">Etunimi: </span>{props.eNimi}</p>
          <p><span className="view-label">Sukunimi: </span>{props.sNimi}</p>
          <p><span className="view-label">Puhelin: </span>{props.puh}</p>
          <p><span className="view-label">Viesti: </span>{props.msg}</p>
      </form>
    </div>
  );
}

export default View;
