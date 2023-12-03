import "./page.css";
import SimpleCard from "../Shop/SimpleCard";
import AddCard from "../Shop/AddCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/esm/Button";
import EditCard from "../Shop/EditCard";
export default function Merch(props) {

const [merchItems, setMerchItems] = useState([]);
const [editstate, setEditState] = useState(false);
const [editItem, setEditItem] = useState({});

function changetoEdit(item) {
    setEditState(true);
    setEditItem(item);
}

    useEffect(() => {
        axios
        .get('http://127.0.0.1:3001/api/items')
        .then((res) => {
            setMerchItems(res.data);
        })
        .catch((err) => {
            console.log('Error from ');
        });
    }, [merchItems]);

    function loginCheck() {
        if (props.isAuthenticated) {
            if(!editstate) {
            return (
                <li className="edit-card" key={1} ><AddCard/></li>
            );
            }
            else {
                return (
                    <li className="edit-card" key={2} ><EditCard item={editItem} setEditState={() => setEditState(false)}/></li>
                );
            }
        }
    }
    const editButton = (item) => { if(props.isAuthenticated) { return <Button className="edit-button" onClick={(e) => {e.preventDefault(); changetoEdit(item)}}>Edit</Button> }}
    function createCards() {
        if (merchItems) {
        return (
            merchItems.map((item) => (
                <li key={item._id} className="merch-info">
                    <div className="card-container">
                        {editButton(item)}
                        <SimpleCard
                            id={item._id}
                            isAuthenticated={props.isAuthenticated}
                            name={item.Name}
                            price={item.Price}
                            image={item.Image}
                            body={item.Body} 
                        />
                    </div>
                </li>
            ))
        );
            } else {
                return <li>Loading...</li>;
            }
    }

    return (
        <div>
            {/* UL displaying the list of items */}
            <ul className="merchItems">
                {loginCheck()}
                {createCards()}
            </ul>
        </div>
    );
}
