import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./Card.css"
import axios from 'axios';


/* State value data is the form data. Easy .json format that can be reformatted to fit the mongo model. Onsubmit will be able to submit a post request easily.*/
const EditCard = (props) => {
  
  const [data, setData] = useState(
    {
    _id: props.item._id,
    Name: props.item.Name,
    Price: props.item.Price,
    Image: props.item.Image,
    Body: props.item.Body
    }
  );


  function putData(data) {
    axios
        .put(`http://127.0.0.1:3001/api/items/${data._id}`, data)
        .then((res) => {
            console.log("Successfully Put: ");
            console.log(res.data);
        })
        .catch((err) => {
            console.log('Error from ');
        });
  }

  return (
    <div className='card'>
      <div className="addForm">
        <h3>Edit Item</h3> {/* I've found that posting the alert is more reliable than using the console.log, cos the log clears on page reset */}
        <form onSubmit={(e) => { e.preventDefault(); putData(data); props.setEditState()} }>
          <ul className="form-information">
            <li className="form-input">
              <label className="add-name">Name</label>
              <input 
                value={data.Name}
                onChange={(e) => setData({...data, Name:e.target.value})}
                id="Name"
                type="text"
              />
            </li>
            <li className="form-input">
              <label className="add-price">Price</label>
              <input
                value={data.Price}
                onChange={(e) => setData({...data, Price:e.target.value})}
                id="Price"
                type="number"
              />
            </li>
            <li className="form-input">
              <label className="add-image">Link to image</label>
              <input
                value={data.Image}
                onChange={(e) => setData({...data, Image:e.target.value})}
                id="Image"
                type="text"
              />
            </li>
            <li className="form-input"> 
              <label className="add-description">Description</label>
              <input
                value={data.Body}
                onChange={(e) => setData({...data, Body:e.target.value})}
                id="Body"
                type="text"
              />
            </li>
            <li>
              <Button type="submit">Save Changes</Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default EditCard;