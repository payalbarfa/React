import { LOGO_URL } from "../utils/constant";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;