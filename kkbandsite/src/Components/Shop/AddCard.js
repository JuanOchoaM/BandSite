import Button from 'react-bootstrap/Button';
import "./Card.css"

let data = {
  Name: "",
  Price: 0,
  Image: "",
  Body: ""
}

function changeHandler(event) {
    data[event.target.id] = event.target.value
  };

const addCard = (props) => {
  return (
    <div className="addForm">
      <h3>Add New Item</h3>
      <form onSubmit={() => alert("data object: " + JSON.stringify(data, null, 2)) }>
        <ul>
          <li>
        <label>Name</label>
        <input 
          onChange={changeHandler}
          id="Name"
          type="text"
        />
        </li>
        <li>
        <label>Price</label>
        <input
          onChange={changeHandler}
          id="Price"
          type="number"
        />
        </li>
        <li>
        <label>Link to image</label>
         <input
          onChange={changeHandler}
          id="Image"
          type="text"
        />
        </li>
        <li>
        <label>Description</label>
         <input
          onChange={changeHandler}
          id="Body"
          type="text"
        />
        </li>
        <li>
        <Button type="submit">Add User</Button>
        </li>
        </ul>
      </form>
    </div>
  );
}

export default addCard;