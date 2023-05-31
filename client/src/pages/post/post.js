import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Post = () => {
  const [post, setPost] = useState({})
  let {slug} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3001/posts/byId/${slug}`).then((response)=> {
      setPost(response.data)
    })
  },[])
  return(
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {post.title} </div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  )
}