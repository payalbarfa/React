import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About US</Link>
                        </li>
                    <li>
                        <Link to="/contact"> Contact  US </Link>
                        </li>
                    <li>Cart</li>
                    <button className="login"
                      onClick={()=>{
                        btnNameReact === "Login" ?
                        setBtnNameReact("Logout"):
                        setBtnNameReact("Login");
                        console.log(setBtnNameReact);
                      }}
                      >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;