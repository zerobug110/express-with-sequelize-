import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./post.css";
export const Post = () => {
  const [post, setPost] = useState({})
  let {slug} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3001/posts/byId/${slug}`).then((response)=> {
      setPost(response.data)
    })
  },[])
  return(
    <div className="post">
      <div className="blog-card">
        <div className="edit-icon">
        </div>

        <div className="blog-title">{post.title}</div>
        <div className="blog-text">{post.postText}</div>
        <div className="blog-footer">{post.username}</div>
      </div>
      <div className="comment">comment</div>
    </div>
    
  )
}