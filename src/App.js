import React from "react";
import { useState,useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import * as yup from 'yup';


const schema = yup.object().shape({
  id: yup.string().required('name must be at least 2 characters').min(2, 'name must be at least 2 characters' )
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
  const [form, setFrom] = useState({id: ''});
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // const name = event.target.elements.name-input.value;
    // const size = event.target.elements.size-dropdown.value;

  }

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  },[])

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
