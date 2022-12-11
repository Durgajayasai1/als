import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import { Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
    <Movies/>
    </div>
  );
}

export default App;
