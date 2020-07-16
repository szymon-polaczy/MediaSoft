import React from 'react'
import styled from 'styled-components'
import GoogleMap from './GoogleMap'

const BigInfo = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: .05rem;
    line-height: 120%;
    margin: 1rem 0 .65rem 0;

    &::after {
        content: '';
        display: block;
        width: 4rem;
        height: 2px;
        background-color: #444;
        margin: .3rem auto 0 auto;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "hours form form place"
                        "phone form form mail";
    margin-top: 3rem;
    margin-bottom: 5rem;

    article {
        display: flex;
        flex-flow: column;
        justify-columns: center;
        align-items: center;

        i {
            font-size: 2.1rem;
            box-shadow: 0 0 .5rem #e5e5e5;
            border-radius: 50%;
            color: #96c93d;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.75rem;
            height: 3.75rem;
            margin-bottom: .65rem;
            background: #fff;
        }

        h3 {
            font-size: 1.2rem;
            letter-spacing: .03rem;
        }

        p {
            font-size: .9rem;
            margin-top: .35rem;
        }
    }

    .hours {
        grid-area: hours;
    }

    .phone {
        grid-area: phone;
    }

    .place {
        grid-area: place;
    }

    .mail {
        grid-area: mail;
    }

    .form {
        input {
            border: none;
            outline: none;
        }

        grid-area: form;
        box-shadow: 0 0 .3rem #e5e5e5;
        border-top: 5px solid var(--theme-color-lighter);
        padding: 1rem;
        background: #fff;

        h2 {
            font-size: 2rem;
        }

        small {
            display: block;
        }

        .checkbox-box {
            margin: 1.5rem 0 .8rem 0;
        }

        input[type=submit] {
            padding: .45rem 2.5rem;
            font-size: 1.05rem;
            letter-spacing: 0.02rem;
            border-radius: .25rem;
            background: linear-gradient(to right, #5B86E5, #36D1DC);
            color: #fff;
            margin: .8rem 0 .4rem 0;
        }

        section {
            display: grid;
            grid-template-columns: 1fr 1fr;

            input {
                box-sizing: border-box;
                border-bottom: 2px solid #444;
                padding: .35rem;
                width: 90%;
            }

            div {
                display: flex;
                flex-flow: column;
                align-items: center;
            }

            .message-box {
                grid-area: 2 / 1 / span 1 / span 2;

                input {
                    width: 100%;
                }
            }

            label {
                display: block;
                font-size: 1.1rem;
                letter-spacing: 0.04rem;
                color: #444;
                padding: .35rem 0;
                margin-top: 1.65rem;
            }
        }
    }
`;

export default () => {
    return (
        <section className="margin-top-medium">
            <BigInfo>Skontaktuj się z nami</BigInfo>
            <Container className="wrapper">
                <article className="hours">
                    <i className="fas fa-clock"></i>
                    <h3>Pn. - Pt. 9:00 - 16:00</h3>
                    <p>Godziny Otwarcia</p>
                </article>
                <article className="phone">
                    <i className="fas fa-phone"></i>
                    <h3>+48 501 442 493</h3>
                    <p>Telefon Kontaktowy</p>
                </article>
                <article className="place">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>ul. Mariacka 37/7</h3>
                    <p>48-304 Nysa</p>
                </article>
                <article className="mail">
                    <i className="fas fa-envelope"></i>
                    <h3>kontakt@mediasoft.com.pl</h3>
                    <p>Adres e-mail</p>
                </article>
                <form className="form">
                    <h2>Wypełnij formularz</h2>
                    <small>Odpowiadamy naprawdę szybko!</small>
                    <section>
                        <div>
                            <label htmlFor="name-input">Imię i Nazwisko:</label>
                            <input type="text" placeholder="Jan Kowalski" id="name-input" required/>
                        </div>
                        <div>
                            <label htmlFor="phone-input">Telefon:</label>
                            <input type="tel" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" id="phone-input" required />
                        </div>
                        <div className="message-box">
                            <label htmlFor="message-input">Wiadomość:</label>
                            <input type="text" placeholder="Twoja wiadomość" id="message-input" required />
                        </div>  
                    </section>
                    <div className="checkbox-box">
                        <input type="checkbox" id="policy-requirement" required />
                        <label htmlFor="policy-requirement">Wyrażam zgodę na przetwarzanie moich danych osobowych</label>
                    </div>
                    <input type="submit" value="Wyślij"/>
                </form>
            </Container>
            <GoogleMap/>
        </section>        
    )
}