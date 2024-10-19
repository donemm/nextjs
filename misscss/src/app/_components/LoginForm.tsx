'use client'

import { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

export const dynamic = 'force-dynamic'

export default function LoginForm() {
  
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);


  const formik = useFormik({
    initialValues: {
      Username: '',
      password: '',
    },
    onSubmit: (values) => {

        setClicked(true);
        setSubmitted(true);
      
    },
    validationSchema: yup.object({
      Username: yup.string().trim().required('Username is required'),
      password: yup.string().trim().required('Password is required'),
    }),
  });
//col-sm-4
  return (
    <div>
    
    <div className="mb-4 col-sm-5">
    <h1 className="mb-4">Login</h1>
      <div hidden={!submitted} className="calert alert-primary" role="alert">
        {clicked}
      </div>

      <form className="mb-3 ms-0" onSubmit={formik.handleSubmit}>
        <div className="mb-3 ms-0">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="Username"
            className="form-control"
            placeholder=""
            value={formik.values.Username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Username && (
            <div className="text-danger">{formik.errors.Username}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>

        <button hidden={clicked} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
    </div>
  );

}
