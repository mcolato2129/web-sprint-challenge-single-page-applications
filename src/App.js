import React from "react";
import { useState,useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import * as yup from 'yup';


const schema = yup.object().shape({
  id: yup.string().required('Name is required').min(2, 'name must be at least 2 characters' ),
  value: yup.string().min(2)
});

const  style = {margin: ' rem', padding: '0.5rem', border: '2 px solid black' }

const Home = (props) => {
  return (
    <div style={{ ...style, borderColor: 'green' }}>
      <h1>Home Page</h1>
    </div>
  )
}

const PizzaForm = (props) => {
  const [form, setForm] = useState({id: ''});
  const [errors, setErrors] = useState([]);

  // const change = event => {
  //   const { value, type  } = event.target
  //   const valueToUse = type === 'checkbox' ? check
  // }

  const changeValue = (field, val) => {
    const newForm = { ...form};
    newForm[field] = val;
    setForm(newForm);
  };

  const runValidations = () => {
    schema
      .validate(form, { abortEarly: false })
      .then((responseData) => {
        console.log("no validation errors");
        console.log(responseData);
        setErrors([]);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.name); // ValidationError
        console.log(err.errors);
        setErrors(err.errors);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = event.target.elements.name-input.value;
    // const size = event.target.elements.size-dropdown.value;

  }

  // useEffect(() => {
  //   schema.isValid(form).then(valid => setDisabled(!valid))
  // },[form])

  return (
    <div style={{ ...style, borderColor: 'red' }}>
      <h1>Pizza Form Thing...I guess. Yeah. Ok. Good.</h1>
      <form id='pizza-form' onSubmit={handleSubmit}>
        <input 
          type= 'text'
          placeholder='Name'
          value={form.id}
          id='name-input'
          minLength='2'
          onChange={(e) => changeValue("text", e.target.value)}
        />
        <br/>
        <label>Pizza Size</label>
        <select id='size-dropdown'>
          <option value='1'>small</option>
          <option value='2'>medium</option>
          <option value='3'>large</option>
        </select>
        <br/>
        <input type='checkbox'/>
        <label>pepporni</label>
        <br/>
        <input type='checkbox'/>
        <label>peppers</label>
        <br/>
        <input type='checkbox'/>
        <label>chicken</label>
        <br/>
        <input type='checkbox'/>
        <label>jalepanoes</label>
        <br/>
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
