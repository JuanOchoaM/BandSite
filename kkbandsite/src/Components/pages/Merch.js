import "./page.css";
import React from "react";
import SimpleCard from "../Shop/SimpleCard";
import AddCard from "../Shop/AddCard";



/* Dummy Data  */
const merchTabletest = [
{
    key: 1,
    Name: "testname",
    Body: "testbody",
    Price: 420,
    Image: "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png"
},
{
    key: 2,
    Name: "testname2",
    Body: "testbody2",
    Price: 690,
    Image: "https://png.pngtree.com/png-vector/20210313/ourmid/pngtree-male-cowboy-hat-with-front-tie-rope-png-image_3053578.jpg"
},
{
    key: 3,
    Name: "wehhh",
    Body: "are u fr",
    Price: 4000,
    Image: "https://i.pinimg.com/originals/55/71/f6/5571f65bba2f26700e12f918e152cdaf.jpg"
}
];

function createCards() {
return (
    /* Maps the data in the table to a list of items to be displayed */
    merchTabletest.map((item) => (
    <li key={item.key} className="merchItems">
        <SimpleCard 
        name={item.Name}
        price={item.Price} 
        image={item.Image}
        body={item.Body} />
    </li>
)))
}
/* here is the temp variable isLoggedIn, which is controlled by whether or not the user is logged in! */

let isLoggedIn = true;

function loginCheck() {
    if (isLoggedIn) {
        return (<li><AddCard /> </li>);
    }
}


export default function merch() {
    return (
     <div >
    {/*This UL displays the list of items, as well as conditionally shows a card to add new items with! It only displays if the user is logged in, and acts as the first list item */}
     <ul className="merchItems">
        {loginCheck()}
        {createCards()}
     </ul>
     </div>
    )
}