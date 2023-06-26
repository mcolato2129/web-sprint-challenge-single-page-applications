import React from "react";
import {Routes, Route, Link} from 'react-router-dom';


const style = {margin: '1rem', padding: '0.5rem', border: '2px solid black' }

const Home = (props) => {
  return (
    <div style={{...style, borderColor: 'green'}}>
      <h1>Home Page</h1>
    </div>
  )
} 

const PizzaForm = (props) => {
  return (
    <div style={{...style, borderColor : 'red'}}>
      <h1>Pizza Form Thing...I guess. Yeah. Ok. Good.</h1>
    </div>
  )
}


const App = () => {
  return (
  <div>
    <h1>Is This On?</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='pizza'>Pizza Form</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='pizza' element={<PizzaForm />} />
    </Routes>
  </div>
  );
};
export default App;
