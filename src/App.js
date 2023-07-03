import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'name must be at least 2 characters'),
  value: yup.string().min(2)
});

const style = { margin: ' rem', padding: '0.5rem', border: '2 px solid black' }

const Home = (props) => {
  return (
    <div style={{ ...style, borderColor: 'green' }}>
      <h1>Home Page</h1>
    </div>
  )
}

const PizzaForm = (props) => {
  const [form, setForm] = useState({ id: ''});
  const [errors, setErrors] = useState({ id: '' });

  // const change = event => {
  //   const { value, type  } = event.target
  //   const valueToUse = type === 'checkbox' ? check
  // }

  const setFormErrors = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0] }))
  }

  const handleSubmit = event => {
    const { value, name } = event.target
    setForm({...form, [name]: value});
    setFormErrors(name, value)
  };
  useEffect(() => {
   console.log(errors)
   console.log(form)
  },[form])

  return (
    <div style={{ ...style, borderColor: 'red' }}>
      <h1>Pizza Form Thing...I guess. Yeah. Ok. Good.</h1>
      <form id='pizza-form' onSubmit={handleSubmit}>
        <input
          type="text"
          name='name'
          placeholder="Name"
          value={form.name}
          id='name-input'
          minLength='2'
          onChange={(event) => handleSubmit(event, 'name')}
        />
        {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
        <br />
        <label>Pizza Size</label>
        <select id='size-dropdown'>
          <option value='1'>small</option>
          <option value='2'>medium</option>
          <option value='3'>large</option>
        </select>
        <br />
        <input type='checkbox' />
        <label>pepporni</label>
        <br />
        <input type='checkbox' />
        <label>peppers</label>
        <br />
        <input type='checkbox' />
        <label>chicken</label>
        <br />
        <input type='checkbox' />
        <label>jalepanoes</label>
        <br />
        <input
          placeholder='Special Instructions'
          id='special-text'
          minLength='2'
        />
        <button type='submit' id='order-button'>Add to order</button>
      </form>

    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Is This On?</h1>
      <nav>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='pizza' id='order-pizza'>Pizza Form</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pizza' element={<PizzaForm />} />
      </Routes>
    </div>
  );
};
export default App;
