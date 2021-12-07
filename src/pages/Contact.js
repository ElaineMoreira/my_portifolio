import { FaPhone, FaEnvelope } from 'react-icons/fa'
const Contact = () => {
    return (
        <>
            <section className="contacts">
            <h1>Contato</h1>
                <ul>
                    <li>
                        <a href="tel:31986104739"><FaPhone /> + 55 31 98610-4739</a>
                    </li>
                    <li>
                        <a href="elainefelipemoreira@gmail.com"><FaEnvelope /> elainefelipemoreira@gmail.com</a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Contact
