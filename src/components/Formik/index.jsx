import React from 'react'
// import Formik from './Formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required!'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 charapters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required!'
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const validationSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 charapters or less').required('Required~'),
  lastName: Yup.string().max(20, 'Must be 20 charapters or less').required('Required~'),
  email: Yup.string().email('Invalid email address').required('Required~')
})

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: ''
//     },
//     onSubmit: handleSubmit,
//     // validate,
//     validationSchema
//   })

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       {/* <input
//         type="firstName"
//         name="firstName"
//         id="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//         onBlur={formik.handleBlur}
//       /> */}
//       <input name="firstName" {...formik.getFieldProps('firstName')} />
//       <br/>
//       {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//       <label htmlFor="lastName">Last Name</label>
//       {/* <input
//         type="lastName"
//         name="lastName"
//         id="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//         onBlur={formik.handleBlur}
//       /> */}
//       <input name="lastName" {...formik.getFieldProps('lastName')} />
//       <br/>
//       {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//       <label htmlFor="email">Email Address</label>
//       {/* <input
//         type="email"
//         name="email"
//         id="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//         onBlur={formik.handleBlur}
//       /> */}
//       <input name="email" {...formik.getFieldProps('email')} />
//       <br/>
//       {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// const SignupForm = () => {
//   return (
//     <Formik
//       initialValues={{ firstName: '', lastName: '', email: '' }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {formik => (
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor="firstName">First Name</label>
//           <input id="firstName" {...formik.getFieldProps('firstName')} />
//           {formik.touched.firstName && formik.errors.firstName ? (
//             <div>{formik.errors.firstName}</div>
//           ) : null}
//           <label htmlFor="lastName">Last Name</label>
//           <input id="lastName" {...formik.getFieldProps('lastName')} />
//           {formik.touched.lastName && formik.errors.lastName ? (
//             <div>{formik.errors.lastName}</div>
//           ) : null}
//           <label htmlFor="email">Email Address</label>
//           <input id="email" {...formik.getFieldProps('email')} />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </Formik>
//   )
// }

const SignupForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: ''
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" type="text" />
      <br/>
      <ErrorMessage name="firstName" component="div" />
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" type="text" />
      <br/>
      <ErrorMessage name="lastName" component="div" />
      <label htmlFor="email">Email Address</label>
      <Field name="email" type="email" placeholder="blue@163.com" />
      <br/>
      <ErrorMessage name="email" component="div" />
      {/* <Field>还接受其他一些道具来让您渲染所需的任何东西 */}
      {/* <Field name="firstname" className="form-input" placeholder="FirstName" /> */}
      {/* <Field name="message" as="textarea" className="form-input" /> */}
      <Field name="colors" as="select" className="my-select">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Field>
      <Field  />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
)

export default SignupForm