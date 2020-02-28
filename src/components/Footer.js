import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MainFooter = styled.footer`
    color: #e0e0e0;
    box-shadow: 0 0 1.5vh #ccc;
    background: var(--theme-color);

    h4 {
        color: #fff;
    }

    a {
        color: #e0e0e0;
    }

    a:hover {
        text-decoration: underline;
        color: #fff;
    }

    .bottom-section {
        background: var(--theme-color-darker);
    }
`

export default () => (
    <MainFooter>
        <section className="top-section">
            <article>
                <h4>Bądź w kontakcie</h4>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    MediaSoft Mariacka 37/7 Nysa 48-304
                </p>
                <p>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:501-442-493">(+48) 501 442 493</a>
                </p>
                <p>
                    <i class="far fa-envelope-open"></i>
                    <a href="mailto:kontakt@mediasoft.com.pl">kontakt@mediasoft.com.pl</a>
                </p>
                <p>
                    <i class="far fa-calendar-alt"></i>
                    Pon - Pt, 9:00-16:00
                </p>
            </article>
            <nav>
                <h4>Szybkie linki</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/websites/">Strony WWW</Link></li>
                    <li><Link to="/hosting/">Hosting</Link></li>
                    <li><Link to="/domains/">Domeny</Link></li>
                    <li><Link to="/google/">Linki Sponsorowane</Link></li>
                    <li><Link to="/contact/">Kontakt</Link></li>
                </ul>
            </nav>
            <img src="https://mediasoft.com.pl/jpg/media-logo.png" alt="MediaSoft"/>
        </section>
        <section className="bottom-section">
            <p>Copyright &copy; MediaSoft - Wszystkie prawa zastrzeżone</p>
            <Link to="/privacy-policy/">Polityka Prywatności</Link>
        </section>
    </MainFooter>
)

/*
<footer className="main-footer flex flex-column">
        <div className="main-footer-top">
            <div className="wrapper flex justify-around align-start">
                <div>
                    <h3>MediaSoft</h3>
                    <p>
                        Mariacka 37/7<br/>
                        48-304 Nysa
                    </p>
                    <p>
                        <b>NIP:</b> 7531856967<br/>
                        <b>REGON:</b> 532401810
                    </p>
                    <p>
                        Numer konta: <b>Nazwa Banku</b><br/>
                        48 9999 9999 9999 9999 9999 9999
                    </p>
                </div>
                <div className="contact-section">
                    <h3>Skontaktuj się z nami:</h3>
                    <p>
                        E-mail: <b><a href="mailto:mediasoft@mediasoft.pl">kontakt@mediasoft.pl</a></b><br/>
                        Tel.stacjonarny: <b><a href="tel:77-433-16-15">77 433 16 15</a></b><br/>
                        Tel.komórkowy <b><a href="tel:501-442-493">501 442 493</a></b><br/>
                    </p>
                </div>
            </div>
        </div>
        <div className="main-footer-bottom">
            <div className="wrapper flex justify-around">
                <div>
                    <p>Copytight &copy; MediaSoft</p>
                </div>
                <nav>
                    <ul className="flex justify-around">
                        <li><Link to="/cookies-policy/">Polityka Cookies</Link></li>
                        <li><Link to="/privacy-policy/">Polityka Prywatności</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    */