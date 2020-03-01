import React from "react"
import styled from "styled-components"

const ContactBar = styled.section`
    padding: 2.5rem 0;
    background: var(--theme-color);
    color: #fff;
    box-shadow: 0 0 3vh #bbb;
    margin: 2.5rem 0;

    .phone, .mail, header {
        min-width: max-content;
    }

    header {
        flex: 1;
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
        flex: 1;
    }

    .mail {
        flex: 1;
    }

    .label {
        font-size: .85rem;
        display: block;
        padding-bottom: .35rem;
    }

    a {
        color: #fff;
    }

    a:hover {
        text-decoration: underline;
    }

    @media(max-width: 1200px) {
        .wrapper {
            padding: 0 1rem;
        }
    }

    @media(max-width: 975px) {
        .phone, .mail, header {
            flex: unset;
            padding: 1rem;
        }

        .label {
            margin: auto;
        }
    }

    @media (max-width: 715px) {
        .wrapper {
            align-items: flex-end;
        }
    }

    @media (max-width: 375px) {
        header i {
            font-size: 2rem;
            margin-right: 1.35rem;
        }

        .label {
            font-size: .75rem;
        }

        h3 {
            font-size: 1.35rem;
        }

        .phone {
            font-size: 1.65rem;
        }
    }
`

export default() => (
    <ContactBar className="contact-us-section">
        <div className="wrapper flex">
            <header className="flex flex-row">
                <i className="fas fa-phone-alt"></i>
                <div className="flex flex-column align-start">
                    <p className="label">Masz pytania? Chcesz porozmawiać o ofercie?</p>
                    <h3>Skontaktuj się z nami!</h3>
                </div>
            </header>
            <p className="flex phone"><a href="tel:501-442-493">(+ 48) 501 442 493</a></p>
            <div className="mail flex flex-column align-start">
                <p className="label">Adres e-mail:</p>
                <h3><a href="mailto:kontakt@mediasoft.com.pl">kontakt@mediasoft.com.pl</a></h3>
            </div>
        </div>
    </ContactBar>
)