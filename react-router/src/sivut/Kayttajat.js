import {
    Routes,
    Route,
    Link
} from 'react-router-dom';

import OmaProfiili from './Profiili';

const Kayttajat = () => {
    return (
      <div>
        <nav>
          <Link to="oma">Oma profiili</Link>
        </nav>
   
        <Routes>
          <Route path="oma" element={<OmaProfiili />} />
        </Routes>
      </div>
    );
  }
export default Kayttajat;