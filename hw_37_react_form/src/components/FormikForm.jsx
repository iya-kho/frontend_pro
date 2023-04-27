import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required('User name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{12}$/, 'Invalid phone number'),
});

export const FormValidated = () => (
  <div className="bg-neutral-100 w-96 mt-12 container px-3 py-3 content-center">
    <h1 className="text-2xl font-semibold mb-6 text-center">Sign up</h1>
    <Formik
      initialValues={{
        userName: '',
        email: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert(`Thank you, ${values.userName}!`);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-center items-center">
          <label className="flex flex-col">
            User name:
            <Field name="userName" className="my-2" />
            {errors.userName && touched.userName ? (
              <div className="text-red-700 text-xs h-4">{errors.userName}</div>
            ) : (
              <div className="h-4"></div>
            )}
          </label>
          <label className="flex flex-col">
            Email:
            <Field name="email" type="email" className="my-2" />
            {errors.email && touched.email ? (
              <div className="text-red-700 text-xs h-4">{errors.email}</div>
            ) : (
              <div className="h-4"></div>
            )}
          </label>
          <label className="flex flex-col">
            Phone number:
            <Field name="phone" className="my-2" />
            {errors.phone && touched.phone ? (
              <div className="text-red-700 text-xs h-4">{errors.phone}</div>
            ) : (
              <div className="h-4"></div>
            )}
          </label>
          <button type="submit" className="bg-lime-700 w-32 my-6 h-10">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
