/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { navbar } from "../data/navbar";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [links, setLinks] = useState(navbar)
    return (
        <>
            <div className="menu-btn">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <BiMenuAltRight />
                </button>
            </div>

            <header className={ `${ isOpen ? "header open" : "header" }` }>
                <nav>
                    <ul>
                        {links.map((link) => {

                            return (
                                <li key={ link.id } onClick={() => setIsOpen(false)}>
                                    <Link to={link.url}>{link.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {/* primeiro jeito de fazer
            { isOpen && (
                <header className="header">
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
            )} */}
        </>
    )
}

export default Menu
