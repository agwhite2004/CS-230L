import logo from './logo.svg';
import './App.css';
import './Card.js';
import './Navbar.js';

function App() {

let section_number = "002";
let wvu_id = "800405096";
let name = "Alex";

  return (
    <div className="App">

      <h1>CS 230L</h1>
      <h2>Section - {section_number}</h2>
      <p>{wvu_id}</p>
      <p>Hi I am {name}</p>
    </div>
  );
}

export default App;
