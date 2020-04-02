import React from 'react'
import styled from 'styled-components'

const ContactBar = styled.section`
    background-color: #fd830d;
    color: #fff;
    padding: 2.25rem 0;
    margin: 5rem 0;

    .wrapper {
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-area: "header header phone mail";
    }

    header {
        font-size: 1.65rem;
        line-height: 130%;
        letter-spacing: .03rem;
        grid-template-areas: header;
        grid-area: 1 / 1 / span 1 / span 2;
    }
    
    article {
        display: flex;
        flex-flow: row;
        align-items: center;
        jusitfy-content: center;
        margin: .65rem;
    }

    article i {
        margin-right: .65rem;
        font-size: 1.75rem;
    }

    a {
        color: #fff;
        font-size: 1.55rem
    }
`;

export default () => {
    return (
        <ContactBar>
            <div className="wrapper">
                <header>
                    <p>Masz pytani? Chcesz porozmawiać o ofercie <br/>Skontaktuj się z nami!</p>
                </header>
                <article>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:501-442-493">(+48) 501 442 493</a>
                </article>
                <article>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:kontakt@mediasoft.com.pl">kontakt@mediasoft.com.pl</a>
                </article>
            </div>
        </ContactBar>
    )
}