import { useState } from "react";


function Product (props) {
    let [isAvail,setIsAvail] = useState("Available");

    // function make_not_avial(){
    //     setIsAvail("Not Available");
    // }

    return (
        <div className="product" >
            <img src={props.img_url} />
            <h2> {props.name}</h2>
            <h2> {props.price}</h2>
            <h2>{isAvail}</h2>
            <button onClick={()=>{setIsAvail("Not Available");}} >make not Available</button>
        </div>
    )
}

export default Product;