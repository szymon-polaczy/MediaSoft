import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MainFooter = styled.footer`
    color: #e0e0e0;
    box-shadow: 0 0 1.5vh #ccc;
    background: var(--theme-color);
    font-size: .9rem;

    article,nav {
        flex: 2;
    }

    article p {
        margin-top: .5rem;
    }

    article span:not(.container) {
        display: block;
        line-height: 120%;
    }

    img {
        object-fit: contain;
        flex: 3;
        height: 5rem;
    }

    .top-section {
        padding: 3.25rem 0;
    }

    h4 {
        color: #fff;
        text-transform: uppercase;
        font-size: .85rem;
        font-weight: 600;
        letter-spacing: .05vw;
        margin-bottom: .85rem;
    }

    a {
        color: #e0e0e0;
    }

    a:hover {
        text-decoration: underline;
        color: #fff;
    }

    .bottom-section {
        padding: 1rem 0;
        text-align: center;
        background: var(--theme-color-darker);
    }

    i {
        color: lightblue;
        font-size: 1rem;
        padding: 0 .65rem .65rem 0;
    }

    nav ul li {
        margin: .45rem 0;
    }

    @media (max-width: 800px) {
        article, nav, img {
            padding: 1rem;
            flex: unset;
        }
    }

    @media (max-width: 755px) {
        img {
            margin: 1rem;
        }
    }

    @media (max-width: 560px) {
        .bottom-section .wrapper {
            jusitfy-content: center;
            flex-flow: column;
        }

        .bottom-section p {
            margin-bottom: .35rem;
        }
    }
`

export default () => (
    <MainFooter>
        
        <section className="top-section">
            <div className="wrapper flex">
                <article>
                    <h4>Bądź w kontakcie</h4>
                    <p className="flex align-start justify-start">
                        <i class="fas fa-map-marker-alt"></i>
                        <span className="container">
                            <span>MediaSoft</span>
                            <span>Mariacka 37/7</span> 
                            <span>Nysa 48-304</span>
                        </span>
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
                        <li><Link to="/"><i class="fas fa-check"></i>Home</Link></li>
                        <li><Link to="/websites/"><i class="fas fa-check"></i>Strony WWW</Link></li>
                        <li><Link to="/hosting/"><i class="fas fa-check"></i>Hosting</Link></li>
                        <li><Link to="/domains/"><i class="fas fa-check"></i>Domeny</Link></li>
                        <li><Link to="/google/"><i class="fas fa-check"></i>Linki Sponsorowane</Link></li>
                        <li><Link to="/contact/"><i class="fas fa-check"></i>Kontakt</Link></li>
                    </ul>
                </nav>
                <img src="https://mediasoft.com.pl/jpg/media-logo.png" alt="MediaSoft"/>
            </div>
        </section>
        <section className="bottom-section">
            <div className="wrapper flex justify-between">
                <p>Copyright &copy; MediaSoft - Wszystkie prawa zastrzeżone</p>
                <Link to="/privacy-policy/">Polityka Prywatności</Link>
            </div>
        </section>
    </MainFooter>
)