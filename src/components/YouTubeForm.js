import React from "react";
import { useFormik } from "formik";

function YouTubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = " Name is required";
      }
      if (!values.email) {
        errors.email = " Email is required";
      }
      if (!values.channel) {
        errors.channel = " Channel is required";
      }
      return errors;
    }
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <div className="form-error">
          {formik.errors.name && formik.touched.name && formik.errors.name}
        </div>
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <div className="form-error">
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>
        <label htmlFor="channel"> Channel </label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        <div className="form-error">
          {formik.errors.channel &&
            formik.touched.channel &&
            formik.errors.channel}
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default YouTubeForm;
