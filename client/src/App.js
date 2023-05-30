
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import { EditIcon } from './components/icons/icons';

function App() {
  const [postList, setPostList] = useState([])
  const baseUrl = "http://localhost:3001/posts"

  useEffect(()=> {
    axios.get(`${baseUrl}`).then((response) => {
      setPostList(response.data);   
      console.log(postList);   
    })
  }, [])
  // useEffect
  return (
    <div className="App">
      {
        postList.map( (blog) => {
          return(
            <div className="block-card" key={blog.id}>
              <div className="edit-icon">
                <EditIcon/>
              </div>

              <div className="blog-title">{blog.title}</div>
              <div className="blog-text">{blog.postText}</div>
              <div className="blog-footer">{blog.username}</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
