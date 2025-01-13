
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.date().required('Date is required').nullable(),
  time: Yup.string().required('Time is required'),
  diners: Yup.number().required('Number of diners is required').positive('Must be a positive number').integer('Must be a whole number'),
});

const BookingForm = () => {
  // Using Formik for handling the form state and validation
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: '',
      diners: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      alert('Booking confirmed!');
    },
  });

  return (
    <div className="booking-form">
      <h2>Book a Table at Little Lemon</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? <div className="error">{formik.errors.date}</div> : null}
        </div>

        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time ? <div className="error">{formik.errors.time}</div> : null}
        </div>

        <div>
          <label htmlFor="diners">Number of Diners:</label>
          <input
            type="number"
            id="diners"
            name="diners"
            value={formik.values.diners}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.diners && formik.errors.diners ? <div className="error">{formik.errors.diners}</div> : null}
        </div>

        <div>
          <button type="submit">Submit Booking</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
