import React from 'react'
import { useFormik } from 'formik'

const FormikContext = React.createContext({})

export default ({ children, ...props }) => {
  const formikStateAnHelpers = useFormik(props)
  return (
    <FormikContext.Provider values={formikStateAnHelpers}>
      {
        typeof children === 'function'
          ?
          children(formikStateAnHelpers)
          :
          children
      }
    </FormikContext.Provider>
  )
}
