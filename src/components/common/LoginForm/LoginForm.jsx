import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css"

const validateLoginForm = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

  password: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(10, "Must be shorter than 5 characters")
    .required("Required")
});



export const LoginForm = (props) => {


  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false
        }}
        validate={validateLoginForm}
        validationSchema={validationSchemaLoginForm}
        onSubmit={props.onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (

          <Form>
            <div>
              <p className={s.status}>{status}</p>
              
            </div>
            <div>
            </div>
            <div>
              <Field className={s.input}
                name={'email'}
                type={'text'}
                placeholder={'e-mail'} />
            </div>
            <ErrorMessage className={s.required} name="email" component="div" />
            <div>
              <Field className={s.input}
                name={'password'}
                type={'password'}
                placeholder={'password'} />
            </div>
            <ErrorMessage className={s.required} name="password" component="div" />
            <div className={s.check}>
              <Field
                className={s.input__check}
                type={'checkbox'}
                name={'rememberMe'}
                id='rememberMe' />
              <label className={s.check__text} htmlFor={'rememberMe'}> remember me </label>
            </div>
            <button
              type={'submit'}
              className={s.btn}
            >Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
