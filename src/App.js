import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Navbar from './Navbar.js';

function App() {

let section_number = "002";
let wvu_id = "800405096";
let name = "Alex";

  return (
    <div className="App">
      {Navbar()}
      <h1>CS 230L</h1>
      <h2>Section - {section_number}</h2>
      <p>{wvu_id}</p>
      <p>Hi I am {name}</p>
      {Card("Test", "This is a test")}
    </div>
  );
}

export default App;
