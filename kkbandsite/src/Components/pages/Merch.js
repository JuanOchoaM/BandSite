import "./page.css";
import React from "react";
import SimpleCard from "../Shop/SimpleCard";

// Will

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
}
];

function createCards() {
return (
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

export default function merch() {
    return (
     <div >
     <ul className="merchItems">
        {createCards()}
     </ul>
     </div>
    )
}