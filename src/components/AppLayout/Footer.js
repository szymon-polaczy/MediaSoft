import React from "react"
import styled from "styled-components"
import Mediasoft from '../../images/mediasoft.png'
import Check from '../../images/check-solid.svg'
import MenuLinks from './MenuLinks'
import { Link } from "gatsby"

const MainFooter = styled.footer`
    color: #e0e0e0;
    background: var(--theme-color);
    font-size: .9rem;

    article,nav {
        flex: 2;
    }

    article p {
        margin-top: .5rem;
    }

    article .wrap-it {
        display: flex;
        flex-flow: wrap;
        justify-content: flex-start;
    }

    article span:not(.container) {
        display: block;
        line-height: 120%;
    }

    img {
        object-fit: contain;
        flex: 3;
        height: 5rem;
        /*width: 100%;*/
    }

    .top-section {
        padding: 3.25rem 0;

        .wrapper {
            display: flex;
            align-items: center;
        }
    }

    h2 {
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: .05vw;
        margin-bottom: .85rem;
    }

    a {
        color: inherit;
    }

    a:hover {
        color: #fff;
    }

    i {
        color: lightblue;
        padding: 0 .65rem .65rem 0;
    }

    .bottom-section {
        padding: 1rem 0;
        text-align: center;
        background: var(--theme-color-darker);

        .wrapper {
            display: flex;
            justify-content: space-around;

            * {
                padding: .35rem;
            }
        }
    }

    nav ul li {
        margin: .65rem 0;
        display: flex;
        align-items: center;
        font-size: 1.1rem;

        &::before {
            content: url(${Check});
            display: inline-block;
            padding-right: .35rem;
            width: 1rem;
        }
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
        .bottom-section {
            .wrapper {
                jusitfy-content: center;
                flex-flow: column;
            }

            p {
                margin-bottom: .35rem;
            }
        }
    }

    @media (max-width: 1000px) {
        .top-section {
            .wrapper {
                display: grid;
                grid-template-columns: repeat(3, 1fr);

                img {
                    padding: 0;
                    margin: 0;
                }
            }
        }
    }

    @media (max-width: 750px) {
        .top-section {
            .wrapper {
                grid-template-columns: repeat(2, 1fr);

                img {
                    width: 100%;
                    grid-row: 2;
                    grid-column: 1 / span 2;
                }
            }
        }
    }

    @media (max-width: 500px) {
        .top-section{
            .wrapper {
                grid-template-columns: 1fr;

                img {
                    grid-row: 3;
                    grid-column: unset;
                }
            }
        }
    }
`

export default () => {
    return (
        <>
        <MainFooter id="footer">
            <section className="top-section">
                <div className="wrapper flex">
                    <article>
                        <h2>Bądź w kontakcie</h2>
                        <p className="wrap-it">
                            <i className="fas fa-map-marker-alt"></i>
                            <span className="container">
                                <span>MediaSoft</span>
                                <span>Mariacka 37/7</span> 
                                <span>Nysa 48-304</span>
                            </span>
                        </p>
                        <p>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:501-442-493">
                                (+48) 501 442 493
                            </a>
                        </p>
                        <p>
                            <i className="far fa-envelope-open"></i>
                            <a href="mailto:kontakt@mediasoft.com.pl">
                                kontakt@mediasoft.com.pl
                            </a>
                        </p>
                        <p>
                            <i className="far fa-calendar-alt"></i>
                            Pon - Pt, 9:00-16:00
                        </p>
                    </article>
                    <nav>
                        <h2>Szybkie linki</h2>
                        <ul>
                            <MenuLinks/>
                        </ul>
                    </nav>
                    <img src={Mediasoft} alt="MediaSoft"/>
                </div>
            </section>
            <section className="bottom-section">
                <div className="wrapper">
                    <p>Copyright &copy; MediaSoft - Wszystkie prawa zastrzeżone</p>
                    <Link to="/privacy-policy/">Polityka Prywatności</Link>
                </div>
            </section>
        </MainFooter>
        </>
    )
}