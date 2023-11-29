import Button from 'react-bootstrap/Button';
import React from 'react';
import "./Card.css"
import axios from 'axios';

//Effectively a simple container for the merch items. Takes in props where props is a json object with attributes image, name, body, and price. Should be formatted within the function in main though.
const simpleCard = (props) => {

  const id = props.id;

  function deleteMe() {
    axios
        .delete(`http://127.0.0.1:3000/api/items/${id}`)
        .then((res) => {
            console.log("Successfully Deleted: ");
            console.log(res.data);
        })
        .catch((err) => {
            console.log('Error from ');
        });
        //Force reloads the page to refresh the list. (I will change this to update state in next iteration)
        window.location.reload(false)
  }

  function isAuthenticated() {
      if(props.isAuthenticated) {
        return (
        <Button className="buy-button" variant="primary" onClick={() => deleteMe()}> Delete</Button>
        );
      }
  }
  
  return (
    <div className="card" style={{ width: '18rem' }}>
      {isAuthenticated()}
      <img className="image" src={props.image} alt="merch item"/>
      <h3 className="name">{props.name}</h3>
      <p className="body">{props.body}</p>
      <p className='price'>${props.price}</p>
      <Button className="buy-button" variant="primary"onClick={() => console.log("User added item to cart")}>Add to Cart</Button>
    </div>
  );
}

export default simpleCard; 