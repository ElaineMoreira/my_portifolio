import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Homepage = () => {
    return (
        <>
            <section className="homepage">
              <div className="overlay">
                <h1>Elaine Moreira</h1>
                <p>FullStack Developer</p>
                <ul>
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/elaine-moreira/" 
                            target="_blank" 
                            rel="noreferrer"
                            >
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/ElaineMoreira" 
                            target="_blank" 
                            rel="noreferrer"
                            >
                            <FaGithub />
                        </a>
                    </li>
                </ul>
              </div>
            </section>
        </>            
    )
}

export default Homepage