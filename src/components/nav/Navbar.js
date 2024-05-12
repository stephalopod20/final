import "./Navbar.css";
import { Link } from "react-router-dom"; //in order to use the Link function

function Nav() {
    return (
        <nav>
            <div className="logo">
                <Link to="/">HomeStretch</Link>
            </div>
            <ul>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <button>Make Todo</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;