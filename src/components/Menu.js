import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const Menu = () => {
    return (
        <>
            <header className="header">
                <div className="menu-btn">
                    <button>
                        <BiMenuAltRight />
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Homepage</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Menu
