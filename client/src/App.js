
import './App.css';
import {Home} from "./pages/home";

import  { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>

    </Routes>
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
