import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Koti from './sivut/Kotisivu';
import Tietoja from './sivut/Tietoja';
import Kayttajat from './sivut/Kayttajat';
 
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Koti</Link>
          </li>
          <li>
            <Link to="/tietoja">Tietoja</Link>
          </li>
          <li>
            <Link to="/kayttajat">Käyttäjät</Link>
          </li>
        </ul>
      </nav>
 
      <Routes>
        <Route path="/" element={<Koti />} />
        <Route path="tietoja/*" element={<Tietoja />} />
        <Route path="kayttajat/*" element={<Kayttajat />} />
      </Routes>
      
    </BrowserRouter>
  );
}
 
export default App;