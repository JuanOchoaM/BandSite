import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./Card.css"
import axios from 'axios';


/* State value data is the form data. Easy .json format that can be reformatted to fit the mongo model. Onsubmit will be able to submit a post request easily.*/
const AddCard = () => {
  const [data, setData] = useState(
    {
    Name: "",
    Price: 0,
    Image: "",
    Body: ""
    }
  );
  
  function postData(data) {
    axios
        .post('http://127.0.0.1:3001/api/items', data)
        .then((res) => {
            console.log("Successfully Posted: ");
            console.log(res.data);
        })
        .catch((err) => {
            console.log('Error from ');
        });
  }

  return (
    <div className='card'>
      <div className="addForm">
        <h3>Add New Item</h3> {/* I've found that posting the alert is more reliable than using the console.log, cos the log clears on page reset */}
        <form onSubmit={(e) => {e.preventDefault(); postData(data); e.target.reset(); } }>
          <ul className="form-information">
            <li className="form-input">
              <label className="add-name">Name</label>
              <input 
                onChange={(e) => setData({...data, Name:e.target.value})}
                id="Name"
                type="text"
              />
            </li>
            <li className="form-input">
              <label className="add-price">Price</label>
              <input
                onChange={(e) => setData({...data, Price:e.target.value})}
                id="Price"
                type="number"
              />
            </li>
            <li className="form-input">
              <label className="add-image">Link to image</label>
              <input
                onChange={(e) => setData({...data, Image:e.target.value})}
                id="Image"
                type="text"
              />
            </li>
            <li className="form-input"> 
              <label className="add-description">Description</label>
              <input
                onChange={(e) => setData({...data, Body:e.target.value})}
                id="Body"
                type="text"
              />
            </li>
            <li>
              <Button type="submit">Add Item</Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default AddCard;