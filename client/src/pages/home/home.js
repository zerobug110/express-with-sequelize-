import { useState, useEffect } from "react";
import axios from "axios";
import {EditIcon} from "../../components/icons/icons"
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [postList, setPostList] = useState([])
  const baseUrl = `http://localhost:3001/posts`
  const navige = useNavigate()
  useEffect(()=> {
    axios.get(`${baseUrl}`).then((response) => {
      setPostList(response.data);   
      console.log(postList);   
    })
  }, [postList])
  // useEffect
    return(

        <div className="home">
      {
        postList.map( (blog) => {
          return(
            <div className="blog-card" key={blog.id} onClick={()=> navige(`/post/${blog.id}`)}>
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
    )
}