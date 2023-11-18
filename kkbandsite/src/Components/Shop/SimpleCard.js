import Button from 'react-bootstrap/Button';
import "./SimpleCard.css"

const simpleCard = (props) => {
  return (
    <div style={{ width: '18rem' }}>
      <img  src={props.image} alt="merch item"/>
      <body>
        <h3>{props.name}</h3>
        <p>
          {props.body}
        </p>
        </body>
        <div className='buy'>
        <text className='Price'>
         ${props.price} 
        </text>
        <Button variant="primary">Add to Cart</Button>
        </div>
    </div>
  );
}

export default simpleCard;