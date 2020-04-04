import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// export default class FormikDemo extends Component {
//   state = {
//     formData: {
//       email: '',
//       password: ''
//     }
//   }

//   validator = values => {
//     const errors = {}
//     if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }
//     return errors
//   }

//   handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2))
//       setSubmitting(false)
//     }, 400)
//   }

//   render() {
//     const { formData } = this.state
//     return (
//       <div>
//         <h1>Anywhere in your app!</h1>
//         <Formik
//           initialValues={formData}
//           validate={this.validator}
//           onSubmit={this.handleSubmit}
//         >
//           {
//             ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="email"
//                   name="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 { errors.email && touched.email && errors.email }
//                 <br/>
//                 <input
//                   type="password"
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 { errors.password && touched.password && errors.password }
//                 <br/>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                 >Submit</button>
//               </form>
//             )
//           }
//         </Formik>
//       </div>
//     )
//   }
// }

export default class FormikDemo extends Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }

  validator = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    } else if (!values.password.trim().length) {
      errors.password = 'Invalid password'
    }
    return errors
  }

  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  render() {
    const { formData } = this.state
    return (
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={formData}
          validate={this.validator}
          onSubmit={this.handleSubmit}
        >
          {
            ({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
    )
  }
}