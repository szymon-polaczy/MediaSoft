import React from "react"
import styled from "styled-components"

const ContactBar = styled.section`
    padding: 2.5rem 0;
    background: var(--theme-color);
    color: #fff;
    box-shadow: 0 0 3vh #bbb;
    margin: 2.5rem 0;

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 4rem;
    }

    header i {
        font-size: 2.5rem;
        margin-right: 1.85rem;
    }

    h3 {
        font-size: 1.65rem;
    }

    .phone {
        font-size: 2rem;
    }

    .label {
        font-size: .85rem;
        display: block;
        padding-bottom: .35rem;
    }
`

export default() => (
    <ContactBar className="contact-us-section">
        <div className="wrapper">
            <header className="flex flex-row">
                <i className="fas fa-phone-alt"></i>
                <div className="flex flex-column align-start">
                    <p className="label">Masz pytania? Chcesz porozmawiać o ofercie?</p>
                    <h3>Skontaktuj się z nami!</h3>
                </div>
            </header>
            <p className="flex phone">(+ 48) 501 442 493</p>
            <div className="flex flex-column align-start">
                <p className="label">Adres e-mail:</p>
                <h3>kontakt@mediasoft.com.pl</h3>
            </div>
        </div>
    </ContactBar>
)