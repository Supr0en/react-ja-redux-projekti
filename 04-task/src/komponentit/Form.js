import './Form.css';
import View from './View';

const Form = () => {
  return (
    <section className="Form">
      <form>
        <div className="mb-3">
            <label for="EtuNimi" className="form-label">Etunimi: </label>
            <input className="form-control" aria-describedby="EtuNimi" id="EtuNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="EtuNimi" className="form-label">Sukunimi: </label>
            <input className="form-control" aria-describedby="EtuNimi" id="EtuNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="EtuNimi" className="form-label">Puhelin: </label>
            <input className="form-control" aria-describedby="EtuNimi" id="EtuNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="EtuNimi" className="form-label">Message: </label>
            <input className="form-control" aria-describedby="EtuNimi" id="EtuNimi" type="text" />
        </div>
      </form>
      <View />
    </section>
  );
}

export default Form;
