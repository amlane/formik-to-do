import React, { useState } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function ToDoForm({ values, touched, errors, handleSubmit }) {
  const [newTask, setNewTask] = useState({});
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="task" type="text" placeholder="New to do..." />
      {touched.task && errors.task && <p className="error">{errors.task}</p>}
      {/* <Field
            type="checkbox"
            name="completed"
            checked={values.completed}
          /> */}
      <button type="submit">+</button>
    </Form>
  );
}

const FormikToDoForm = withFormik({
  mapPropsToValues({ task, completed }) {
    return {
      task: task || "",
      completed: completed || false
    };
  },
  // validationSchema: Yup.object().shape({
  //   task: Yup.string().required("required"),
  //   completed: Yup.boolean().default(false)
  // }),
  handleSubmit(values, { setNewTask }) {
    axios.post("https://reqres.in/api/users/", values).then(res => {
      console.log(res.data);
      setNewTask(res.data);
    });
  }
})(ToDoForm);
export default FormikToDoForm;
