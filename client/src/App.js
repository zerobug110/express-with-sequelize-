
import './App.css';
import { Home } from './pages/home/home';
import { CreatePost } from './pages/create-post/create-post';
import { Post } from './pages/post/post';
import  { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <Routes>  
      <Route index element={<Home/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
      <Route path="/post/:slug" element={<Post/>}/>
    </Routes>
    
  );
}

export default App;
