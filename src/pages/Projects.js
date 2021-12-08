/* eslint-disable no-unused-vars */
import { useState } from "react";
import { projects } from "../data/projects";

const Projects = () => {
    const [cards, setCards] = useState(projects)
    return (
        <>
            <section className="projects">
                <h1>Projetos</h1>
                <div className="cards">
                    { cards.map(({ id, title, image, desc, github, repo }) => (
                        <article key={ id }>
                            <img src={image} alt={title} />
                            <h4>{ title }</h4>
                            <p>{ desc }</p>
                            <ul>
                                <li>
                                    <a href={ github } target="_blank" rel="noopenner noreferrer" className="github">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href={ repo } target="_blank" rel="noopenner noreferrer" className="repo">
                                        Repositório
                                    </a>
                                </li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
            
        </>
    )
}

export default Projects
