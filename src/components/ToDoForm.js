import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function ToDoForm({ status, touched, errors, tasks, setTasks }) {


  useEffect(() => {
    setTasks([...tasks, status])
  }, [status])
  return (
    <Form>
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
  validationSchema: Yup.object().shape({
    task: Yup.string().required("to do is required"),
    completed: Yup.boolean().default(false)
  }),
  handleSubmit(values, { setStatus }) {
    axios.post("https://reqres.in/api/users/", values).then(res => {
      console.log(res.data);
      setStatus(res.data);
    });
  }
})(ToDoForm);
export default FormikToDoForm;
