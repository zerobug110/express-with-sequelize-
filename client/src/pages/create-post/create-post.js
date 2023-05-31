import {Formik, Form, Field, } from "formik";

export const CreatePost = () => {

    return(
        <div className="create-post-form">
            <Formik >
                <Form action="">
                    <Field id="inpute-create-post" name ="title" placeholder="name"/>
                </Form>
            </Formik>
        </div>
    )
}