import React from 'react'
import styled from 'styled-components'
import GoogleMap from './GoogleMap'
import Form from './Form'
import { SectionContainer } from '../../styles/sections'
import { BigInfo } from '../../styles/info'

const Container = styled.section`
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

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "form form"
                            "phone mail"
                            "hours place";

        article {
            margin-top: 1.5rem;
        }
    }

    @media (max-width: 500px) {
        display: flex;
        flex-flow: column-reverse;
    }
`;

export default () => {
    return (
        <SectionContainer id="ContactSection">
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
                <Form/>
            </Container>
            <GoogleMap/>
        </SectionContainer>        
    )
}