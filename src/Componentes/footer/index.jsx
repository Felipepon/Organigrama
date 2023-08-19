import "./Footer.css"

const Footer = () =>{
    return<footer className="footer" style={{backgroundImage:"url(/img/footerr.png)" }}>
        <div className="redes">
            <a href="https://github.com/Felipepon">
                <img src="/img/github-50.png" alt="Github"/>
            </a>
            <a href="https://www.instagram.com/andresfelipeuribetamayo/">
                <img src="/img/instagram-50.png" alt="instagram"/>
                
            </a>
            <a href="https://felipepon.github.io/portafolio/">
                <img src="/img/developer.png" alt="mi Pagina"/>
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Andres Uribe</strong>
    </footer>
}

export default Footer