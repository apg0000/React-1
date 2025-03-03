import { useState,useEffect } from "react";
import {Link} from "react-router"
const Navbar = () => {

    const [btnName, setBtnName] = useState("Light");
    console.log("navbar rendered");
    
    useEffect(() => {
        console.log("useEffect called");
    },[btnName]);
    
    return (
        <div className="navbar">
            <h1>LOGO</h1>
            <ul className="menu_items">
                <li><Link to="/men">MEN</Link></li>
                <li><a href="/women">WOMEN</a></li>
                <li><a href="/kid">KIDS</a></li>
                <li>CART</li>
                <button onClick={()=> {

                    btnName ==="Light" ? setBtnName("Dark"): setBtnName("Light") ;
                    
                }}>{btnName}</button>
            </ul>
        </div>
    );
};  
export default Navbar;