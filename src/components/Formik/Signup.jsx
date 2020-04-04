import React from 'react'
import { Formik, Form, useField } from 'formik'
import styled from '@emotion/styled'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
  const [filed, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...filed} {...props} />
      {
        meta.touched && meta.error
          ?
          <div className="error">{meta.error}</div>
          :
          null
      }
    </>
  )
}

const MyCheckbox = ({ children, tip, ...props }) => {
  const [filed, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...filed} {...props} />
        {tip || 'Accept conditions'}
      </label>
      {
        meta.touched && meta.error
          ?
          <div className="error">{meta.error}</div>
          :
          null
      }
    </>
  )
}

const StyledSelect = styled.select`
  color: hotpink;
`

const StyledErrorMessage = styled.div`
  color: ${props => props.primary ? 'hotpink' : 'turquoise'};
`

const StyledLabel = styled.label`
  color: hotpink;
`

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {
        meta.touched && meta.error
          ?
          <StyledErrorMessage primary>{meta.error}</StyledErrorMessage>
          :
          null
      }
    </>
  )
}

const validationSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 charapters or less').required('Required!'),
  lastName: Yup.string().max(20, 'Must be 20 charapters or less').required('Required!'),
  email: Yup.string().email('Invalid email address').required('Required!'),
  acceptedTerms: Yup.boolean().required('Required!').oneOf([true], 'You must accept the terms and conditions.'),
  jobType: Yup.string().oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type').required('Required!'),
})

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}

const Signup = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false,
          jobType: ''
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <br/>
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <br/>
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <br/>
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <br/>
          <MyCheckbox name="acceptedTerms" tip={<span>Accept <a href="/#">Conditions</a>?</span>}>
            I accept the terms and conditions
          </MyCheckbox>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default Signup