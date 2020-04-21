import React from 'react'
import styled from 'styled-components'
import Hostings from '../../images/undraw_success_factors_fay0.svg'

const BigInfo = styled.h2`
    font-size: 2.5rem;
    letter-spacing: .05rem;
    line-height: 120%;
    margin: 1rem 0 1.5rem 0;

    &::after {
        content: '';
        display: block;
        width: 20rem;
        height: 2px;
        background-color: #666;
        margin-top: .3rem;
        background: #45B649;
    }
`;

const HostingContainer = styled.section`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    section {
        padding: 0 5rem;
    
        img {
            width: 100%;
            transform: translateX(50px);
        }
    }

    h4 {
        margin-top: 3.5rem;
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        padding-bottom: .65rem;

        &::after {
            content: '';
            display: block;
            width: 20rem;
            height: 2px;
            margin-top: .3rem; 
            background: #444;
            background: #DCE35B;
        }
    }

    .info {
        line-height: 150%;
        font-size: 1.2rem;
        color: #333;
        letter-spacing: 0.03rem;
    }

    article {
        margin-bottom: 1.3rem;

        h3 {
            font-size: 1.35rem;
            letter-spacing: .02rem;
        }
    
        p {
            margin-top: .35rem;
            letter-spacing: .01rem;
        }
    }
`;

export default () => {
    return (
        <HostingContainer>
            <section className="image-section">
                <img src={Hostings} alt="Hosting Logo" />
            </section>
            <section>
                <BigInfo>Oto Hostingi Jakie Oferujemy</BigInfo>
                <article>
                    <h3>Basic</h3>
                    <p>Otrzymujesz 1GB/2GB w cenie już od 109zł</p>
                </article>
                <article>
                    <h3>Advanced</h3>
                    <p>Otrzymujesz 1GB/2GB w cenie już od 109zł. Lepiej</p>
                </article>
                <article>
                    <h3>Professional</h3>
                    <p>Otrzymujesz 1GB/2GB w cenie już od 109zł. Prawie najlepszy</p>
                </article>
                <article>
                    <h3>Dedykowany Professional</h3>
                    <p>Aby dowiedzieć się więcej skontaktuj się znami. Tak dokładnie mamy lepszy tier</p>
                </article>

                <h4>Co dostaniesz na naszym hostingu</h4>
                <p className="info">Whether you are looking for a personal website hosting plan or a business website hosting plan, HostGator is the perfect solution for you. Our powerful website 
                    hosting services will not only help you achieve your overall website goals, but will also provide you with the confidence you need in knowing that you are 
                    partnered with a reliable and secure website hosting platform.
                    We are one of the easiest website hosting platforms to use, and remain committed to providing our customers with one of the best hosting solutions on the market.</p>
            </section>
        </HostingContainer>
    )
}