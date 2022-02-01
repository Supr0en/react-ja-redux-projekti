import './View.css';

const [title, setTittle] = useState('')

const View = () => {
  return (
    <div className="View">
      <h1>This is input</h1>
      <form>
        <div className="mb-3">
            <label for="eNimi" className="form-label">Etunimi: </label>
            <input onChange={event => setTittle(event.target.value)} />
        </div>
        <div className="mb-3">
            <label for="sNimi" className="form-label">Sukunimi: </label>
            <input onChange={event => setTittle(event.target.value)} />
        </div>
        <div className="mb-3">
            <label for="puh" className="form-label">Puhelin: </label>
            <input onChange={event => setTittle(event.target.value)} />
        </div>
        <div className="mb-3">
            <label for="msg" className="form-label">Message: </label>
            <input onChange={event => setTittle(event.target.value)} />
        </div>
      </form>
    </div>
  );
}

export default View;
