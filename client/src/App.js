
import './App.css';
import { Home } from './pages/home/home';
import { CreatePost } from './pages/create-post/create-post';
import  { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
    // <div className="App">
    //   <Home/>
    // </div>
  );
}

export default App;
