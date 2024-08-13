import { Form } from "react-router-dom";
import './FormHome.css'

function FormHome () {
    return (
            <Form className="form-home" method="get" action="events">
                <input type="text" name="title" />
                <input type="text" name="description" />
                <button type="submit">Create</button>
            </Form>
    )
}

export default FormHome;