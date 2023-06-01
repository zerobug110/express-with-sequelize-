import {Formik, Form, Field, ErrorMessage, } from "formik";
import { useState } from "react";
import axios from "axios"
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
    
    const  initialValules = {
        title: "",
        postText: "",
        username: ""
    }
    
    const [postList, setPostList] = useState([])
    const baseUrl = "http://localhost:3001/posts"
    const navigate = useNavigate()

    const onSubmit = (data) => {
        axios.post(baseUrl, data).then((response)=>{
            setPostList(response.data)
            navigate("/home")
        })
    
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(20).required(),
    })
    

    return(
        <div className="create-post-form">
            <Formik 
                initialValues={initialValules} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form action="">
                    <ErrorMessage name="title" component="span"/>
                    <Field 
                        id="inpute-create-post" 
                        name ="title" 
                        placeholder="(Ex title)"
                    />
                    <ErrorMessage name="postText" component="span"/>
                    <Field 
                        id="inpute-create-post" 
                        name ="postText" 
                        placeholder="(Ex my first blog)"
                    />
                    <ErrorMessage name="username" component="span"/>
                    <Field 
                        id="inpute-create-post" 
                        name ="username" 
                        placeholder="(Ex username)"
                    />
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    )
}