import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact  US</li>
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