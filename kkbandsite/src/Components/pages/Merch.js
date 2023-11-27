// Merch.js
import "./page.css";
import SimpleCard from "../Shop/SimpleCard";
import AddCard from "../Shop/AddCard";

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
        Image: "https://pngimg.com/d/cowboy_hat_PNG72.png"
    },
    {
        key: 3,
        Name: "wehhh",
        Body: "are u fr",
        Price: 4000,
        Image: "https://i.pinimg.com/originals/55/71/f6/5571f65bba2f26700e12f918e152cdaf.jpg"
    }
];

export default function Merch(props) {


    function loginCheck() {
        if (props.isAuthenticated) {
            return (
                <li><AddCard /></li>
            );
        }
    }

    function createCards() {
        return (
            merchTabletest.map((item) => (
                <li key={item.key} className="merch-info">
                    <SimpleCard
                        name={item.Name}
                        price={item.Price}
                        image={item.Image}
                        body={item.Body} />
                </li>
            ))
        );
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
