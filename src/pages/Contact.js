import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
const Contact = () => {
    return (
        <>
            <section className="contacts">
            <h1>Contato</h1>
                <ul>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=555531986104739&text=Ol%C3%A1!%20Meu%20nome%20%C3%A9%20Elaine%20Moreira%20e%20obrigado%20por%20entrar%20em%20contato%20comigo!%20Logo%20irei%20te%20responder!"><FaWhatsapp /> + 55 31 98610-4739</a>
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
