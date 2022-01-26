import './Form.css';
import View from './View';

const Form = () => {
  return (
    <section className="Form">
    <h1>Fill the form</h1>
      <form>
        <div className="mb-3">
            <label for="eNimi" className="form-label">Etunimi: </label>
            <input className="form-control" aria-describedby="eNimi" id="eNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="sNimi" className="form-label">Sukunimi: </label>
            <input className="form-control" aria-describedby="sNimi" id="sNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="puh" className="form-label">Puhelin: </label>
            <input className="form-control" aria-describedby="puh" id="puh" type="text" />
        </div>
        <div className="mb-3">
            <label for="msg" className="form-label">Message: </label>
            <input className="form-control" aria-describedby="msg" id="msg" type="text" />
        </div>
      </form>
      <View />
    </section>
  );
}

export default Form;
