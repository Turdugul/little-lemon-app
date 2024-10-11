import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function ReservationForm(props) {
  const navigate = useNavigate();

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>),
  );

  const formik = useFormik({
    initialValues: {
      fName: '',
      lName: '',
      email: '',
      tel: '',
      people: 1,
      date: '',
      time: '',
      occasion: 'None',
      preferences: 'None',
      comments: '',
    },
    validationSchema: Yup.object({
      fName: Yup.string().required('First name is required'),
      lName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      tel: Yup.string()
        .required('Phone number is required')
        .min(10, 'Must be at least 10 characters'),
      time: Yup.string().required('Please select a time'),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/confirmation'); // Navigate to confirmation page after form submission
    },
  });

  function handleDateChange(e) {
    const { value } = e.target;
    formik.setFieldValue('date', value);

    const date = new Date(value);
    props.updateTimes(date);
    setFinalTime(
      props.availableTimes.map((times) => <option key={times}>{times}</option>),
    );
  }

  return (
    <form className="reservation-form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fName">First Name</label>
        <br />
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          {...formik.getFieldProps('fName')}
        />
        {formik.touched.fName && formik.errors.fName ? (
          <div className="error">{formik.errors.fName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lName">Last Name</label>
        <br />
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          {...formik.getFieldProps('lName')}
        />
        {formik.touched.lName && formik.errors.lName ? (
          <div className="error">{formik.errors.lName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label>
        <br />
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          {...formik.getFieldProps('tel')}
        />
        {formik.touched.tel && formik.errors.tel ? (
          <div className="error">{formik.errors.tel}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="people">Number of People</label>
        <br />
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          {...formik.getFieldProps('people')}
        />
      </div>

      <div>
        <label htmlFor="date">Select Date</label>
        <br />
        <input
          type="date"
          id="date"
          required
          value={formik.values.date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="time">Select Time</label>
        <br />
        <select
          id="time"
          required
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {finalTime}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className="error">{formik.errors.time}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <br />
        <select
          id="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="None">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label>
        <br />
        <select
          id="preferences"
          value={formik.values.preferences}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="None">None</option>
          <option value="Indoors">Indoors</option>
          <option value="Outdoor (Patio)">Outdoor (Patio)</option>
          <option value="Outdoor (Sidewalk)">Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label>
        <br />
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          {...formik.getFieldProps('comments')}
        />
      </div>

      <div>
        <br />
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button type="submit" className="action-button">
          Book a table
        </button>
      </div>
    </form>
  );
}
