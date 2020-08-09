import React from 'react'
import styled from 'styled-components'

const QuickContactSection = styled.section`
    background-color: #fd830d;
    color: #fff;
    padding: 2.25rem 0;
    margin: 5rem 0;

    .wrapper {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(4, 1fr);
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
        margin: .65rem;

        i {
            margin-right: .65rem;
            font-size: 1.75rem;
        }
    
        a {
            color: #fff;
            font-size: 1.55rem
        }
    }

    @media (max-width: 1400px) {
        .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;

            header {
                width: 100%;

                p {
                    text-align: center;
                }
            }
        }
    }

    @media (max-width: 375px) {
        header {
            font-size: 1.5rem; 
        }

        article {
            i {
                font-size: 1.6rem;
            }

            a {
                font-size: 1.4rem;
            }
        }
    }
`;

export default () => {
    return (
        <QuickContactSection id="ContactUsSection">
            <div className="wrapper">
                <header>
                    <p>Masz pytanie? Chcesz porozmawiać o ofercie <br/>Skontaktuj się z nami!</p>
                </header>
                <article>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:501-442-493">(+48) 501 442 493</a>
                </article>
                <article>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:kontakt@mediasoft.com.pl">kontakt@mediasoft.com.pl</a>
                </article>
            </div>
        </QuickContactSection>
    )
}