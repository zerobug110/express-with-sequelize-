
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [postList, setPostList] = useState([])
  const baseUrl = "http://localhost:3001/posts"

  useEffect(()=> {
    axios.get(`${baseUrl}`).then((response) => {
      setPostList(response.data);      
    })
  }, [])
  // useEffect
  return (
    <div className="App">
      {
        postList.map( (item) => {
          return(
            <h1>{item.title}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
