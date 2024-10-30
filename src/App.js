import logo from './logo.svg';
import './App.css';
import Sign from './Pages/Sign';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Accueil from './Pages/Accueil';
import Menu from './Pages/Menu';
import Profil from './Pages/Profil';

function App() {
  return (
      <Router>
        <Routes>
          <Route path = "/" element= {<Sign/>}></Route>
          <Route path = "/Login" element= {<Login/>}></Route>
          <Route path = "/acc" element= {<Accueil/>}></Route>
          <Route path = "/Menu" element= {<Menu/>}></Route>
          <Route path = "/Profil" element= {<Profil/>}></Route>




        </Routes>
      </Router>
  );
}

export default App;
