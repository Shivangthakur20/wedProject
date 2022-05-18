
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Remebering from "./components/Remebering.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Slider start={data.banner.start}/>
      <Remebering/>
      
    </Router>  
   
  );
}

export default App;
