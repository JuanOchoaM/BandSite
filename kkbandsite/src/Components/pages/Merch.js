import "./page.css";
import SimpleCard from "../Shop/SimpleCard";
import AddCard from "../Shop/AddCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Merch(props) {

const [merchItems, setMerchItems] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://127.0.0.1:3001/api/items')
        .then((res) => {
            console.log(res.data);
            setMerchItems(res.data);
        })
        .catch((err) => {
            console.log('Error from ');
        });
    }, []);

    function loginCheck() {
        if (props.isAuthenticated) {
            return (
                <li key={23} ><AddCard /></li>
            );
        }
    }

    function createCards() {
        if (merchItems) {
        return (
            merchItems.map((item) => (
                <li key={item._id} className="merch-info">
                    <SimpleCard
                        id={item._id}
                        isAuthenticated={props.isAuthenticated}
                        name={item.Name}
                        price={item.Price}
                        image={item.Image}
                        body={item.Body} />
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
