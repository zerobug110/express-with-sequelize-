import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./post.css";


export const Post = () => {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState([])
  let {slug} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3001/posts/byId/${slug}`).then((response)=> {
      setPost(response.data)
    })
  },[])

  useEffect(()=>{
    axios.get(`http://localhost:3001/comments/${slug}`).then((response)=> {
      setComments(response.data)
    })
  },[])

  const addComment = () => {
    axios.post("http://localhost:3001/comments", 
    {commentBody: newComment, PostId: slug}).
    then((response)=> {
      const commentsToAdd = {commentBody: newComment}
      setComments([...comments, commentsToAdd])
    })
  }

  return(
    <div className="post">
      <div className="blog-card">
        <div className="edit-icon">
        </div>

        <div className="blog-title">{post.title}</div>
        <div className="blog-text">{post.postText}</div>
        <div className="blog-footer">{post.username}</div>
      </div>

        <div className="comment">
          <input placeholder="comment-list" onChange={(event)=> {setNewComment(event.target.value)}} value={newComment}/>
          <button onClick={addComment}> add comment</button>
          {
            comments.map( comment => {
              return(
                <div className="comment-message">{comment.commentBody}</div>
              )
            })
          }
        </div>
    </div>
    
  )
}