import Button from 'react-bootstrap/Button';
import React from 'react';
import "./Card.css"


//Effectively a simple container for the merch items. Takes in props where props is a json object with attributes image, name, body, and price. Should be formatted within the function in main though.
const simpleCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img  src={props.image} alt="merch item"/>
      <div className='body'>
        <h3>{props.name}</h3>
        <p>
          {props.body}
        </p>
        </div>
        <div className='buy'>
        <p className='Price'>
         ${props.price} 
        </p>
        <Button variant="primary" onClick={() => console.log("User added item to cart")}>Add to Cart</Button>
        </div>
    </div>
  );
}

export default simpleCard;