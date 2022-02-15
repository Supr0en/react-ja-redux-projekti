import './Form.css';
import View from './View';
import React, {useState} from 'react';

const Form = () => {

  const [eNimi, seteNimi] = useState();
  const [sNimi, setsNimi] = useState();
  const [puh, setpuh] = useState();
  const [msg, setmsg] = useState();
  
  return (
    <section className="Form">
      <h2>Fill the form</h2>
      <form>
        <div className="mb-3">
            <label for="eNimi" className="form-label">Etunimi: </label>
            <input className="form-control" aria-describedby="eNimi" id="eNimi" type="text" onChange={(e) => seteNimi(e.target.value)} />
        </div>
        <div className="mb-3">
            <label for="sNimi" className="form-label">Sukunimi: </label>
            <input className="form-control" aria-describedby="sNimi" id="sNimi" type="text" onChange={(e) => setsNimi(e.target.value)} />
        </div>
        <div className="mb-3">
            <label for="puh" className="form-label">Puhelin: </label>
            <input className="form-control" aria-describedby="puh" id="puh" type="text" onChange={(e) => setpuh(e.target.value)} />
        </div>
        <div className="mb-3">
            <label for="msg" className="form-label">Message: </label>
            <input className="form-control" aria-describedby="msg" id="msg" type="text" onChange={(e) => setmsg(e.target.value)} />
        </div>


      </form>
      
      <View eNimi={eNimi} sNimi={sNimi} puh={puh} msg={msg} />
    </section>
  );
}

export default Form;