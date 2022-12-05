import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';

import { useFormik } from 'formik';

// import Field from './Field'

import './styles.scss'



const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      console.log(formik);

      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Submit</button>
        </form>
      );
    


    // const initialValues = {email: '', password: '' }
    // const handlValidate = (values) => {
    //     const errors = {};
    //     if (!values.email) {
    //     errors.email = 'Required';
    //     } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //     errors.email = 'Invalid email address';
    //     }
    //     return errors;
    // }
    // const handleSubmit = (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //     }, 400);
    // }
    // return (
    //     <div>
    //         <h1>Formik Form</h1>
    //         <div>
    //             <h1>Anywhere in your app!</h1>
    //             <Formik
    //             initialValues={initialValues}
    //             validate={handlValidate}
    //             onSubmit={handleSubmit}
    //             >
    //             {
    //             ({ isSubmitting }) => (
    //                 <Form>
    //                 <Field type="email" name="email" />
    //                 <ErrorMessage name="email" component="div" />
    //                 <Field type="password" name="password" />
    //                 <ErrorMessage name="password" component="div" />
    //                 <button type="submit" disabled={isSubmitting}>
    //                     Submit
    //                 </button>
    //                 </Form>
    //             )
                
    //             // (props) => (
    //             //     <form onSubmit={props.handleSubmit}>
    //             //         <Field
    //             //             name="email"
    //             //             {...props}
    //             //         />
    //             //         <Field
    //             //         name="password"
    //             //         {...props}
    //             //         />
                    
    //             //     <button type="submit" disabled={props.isSubmitting}>
    //             //         Submit
    //             //     </button>
    //             //     </form>
    //             // )
    //             }
    //             </Formik>
    //         </div>
    //     </div>
    // )
}
export default FormikForm;