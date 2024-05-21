import { Link } from "react-router-dom";
import logo from "./../../assets/littlelemon_logo.png"

const Nav = () => {
    return(
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Booking</Link></li>
            </ul>
        </nav>
    )
}

export default Nav