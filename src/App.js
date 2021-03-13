import React, { useEffect, useState } from "react";  
import logo from './logo.svg';
import './App.css';

function App() {
 let person = {
   firstName: "Musanur",
   lastName: "Nirob"
 }

 let person2 = {
  firstName: "MD.",
  lastName: "Musanur"
 }

 let style = {
   color: "red", 
   backgroundColor: "yellow",
   borderRadius: "10px",
   boxShadow: "black 4px 4px 6px 3px"
 }

 const products = [
   {name: "Adobe Photoshop", price: "$62.3"},
   {name: "Adobe illustrator", price: "$53.3"},
   {name: "Adobe Lightroom",price: "$43.3"}
 ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={style}>Heading: {person.firstName + " " + person.lastName}</h1>
        <h1 style={{backgroundColor: "cyan", color: "black", padding: "10px", borderRadius: "10px", boxShadow: "inset 0px 1px 12px 6px"}}>Heading2: {person2.firstName + " " + person2.lastName}</h1>
        <h3></h3>
        <p>My first react website</p>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name="Musanur Nirob" year="fail year"></Person>
        <Person name="Osman Goni Niloy" year="year"></Person>
        <Person name="Habibur Rohoman Habib" year="year"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}, {user.username}, {user.email} </li> )
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const eventHandler = () =>{
    setCount(count + 1)
    // const newCount = count + 1;
    // setCount(newCount)
  };
  
    return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={eventHandler}>Increase</button>
    </div>
  )
}

function Product(props){
  let productStyle = {
    height: "250px",
    width: "250px",
    backgroundColor: "lightgray",
    borderRadius: "5px",
    margin: "10px"
  }
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
    boxShadow: "inset 2px 9px 9px 0px black"
  }
  return(
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <p>Hero of the {props.year}</p>
    </div>
  );
}

export default App;
