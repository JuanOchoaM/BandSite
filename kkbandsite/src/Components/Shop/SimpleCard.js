import Button from 'react-bootstrap/Button';
import React from 'react';
import "./Card.css"


//Effectively a simple container for the merch items. Takes in props where props is a json object with attributes image, name, body, and price. Should be formatted within the function in main though.
const simpleCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="image" src={props.image} alt="merch item"/>
      <h3 className="name">{props.name}</h3>
      <p className="body">{props.body}</p>
      <p className='price'>${props.price}</p>
      <Button className="buy-button" variant="primary"onClick={() => console.log("User added item to cart")}>Add to Cart</Button>
    </div>
  );
}

export default simpleCard; 