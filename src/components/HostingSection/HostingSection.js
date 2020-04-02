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

const Holder = styled.article`
    border-radius: .65rem;
    overflow: hidden;
    box-shadow: 0 0 .35rem #eee;

    h3 {
        font-size: 1.3rem;
        line-height: 150%;
        text-align: center;
        background: #fff;
    }

    small {
        text-align center;
        width: 100%;
        display: block;
        position: relative;
        z-index: -1;
        box-shadow: 0 0 .35rem #ccc;
        padding-bottom: 1rem;
    }

    h3 span {
        display: inline-block;
        padding-bottom: .25rem;
    }

    h3::before {
        content: '';
        display: block;
        height: .65rem;
        margin-bottom: .65rem;
        width: 100%;
        /*border-radius: .65rem .65rem 0 0;*/
    }

    .basic::before {
        background: linear-gradient(to right, #FFAFBD, #ffc3a0);
    }

    .advanced::before {
        background: linear-gradient(to right, #f4c4f3, #fc67fa);
    }

    .professional::before {
        background: linear-gradient(to right, #ff7e5f, #feb47b);
    }

    .professional-plus::before {
        background: linear-gradient(to right, #4ecdc4, #7bc6cc);
    }

    ul {
        padding-bottom: 1.5rem;
    }

    ul li {
        font-size: .9rem;
        line-height: 110%;
        padding: .5rem 3rem;
        border-bottom: 1px solid #ccc;
    }

    ul li:last-child {
        border: none;
    }

    section h4 {
        text-align: center;
        letter-spacing: .05rem;
        font-size: 1.1rem;
        margin-bottom: .65rem;
        padding: 1rem 0 .5rem 0;
    }
`;

const Container = styled.div`
    display: grid;
    gap: 2rem 5rem;
    grid-template-columns: repeat(3, 1fr);
`;

const Try = styled.section`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    section {
        padding: 0 5rem;
    }

    section:first-child {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section img {
        width: 100%;
        transform: translateX(50px);
    }

    h4 {
        margin-top: 3.5rem;
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        padding-bottom: .65rem;
    }

    h4::after {
        content: '';
        display: block;
        width: 20rem;
        height: 2px;
        margin-top: .3rem; 
        background: #444;
        background: #DCE35B;
    }

    .info {
        line-height: 150%;
        font-size: 1.2rem;
        color: #333;
        letter-spacing: 0.03rem;
    }

    article {
        margin-bottom: 1.3rem;
    }

    article h3 {
        font-size: 1.35rem;
        letter-spacing: .02rem;
    }

    article p {
        margin-top: .35rem;
        letter-spacing: .01rem;
    }
`;

export default () => {
    return (
        <>
        {/*<section className="margin-top-medium">
            <BigInfo>Nasz Hosting Stron Internetowych</BigInfo>
            <Container className="wrapper">
                <Holder>
                    <h3 className="basic">Serwery Wirtualne <span>Basic</span></h3>
                    <small>już od 109zł netto</small>
                    <section>
                        <h4>Co możemy Ci Zaoferować?</h4>
                        <ul>
                            <li>✓ Powierzchnia dyskowa: 1GB/2GB</li>
                            <li>✓ Konto FTP</li>
                            <li>✓ Jedno konto mailowe</li>
                            <li>✓ Kopia Bezpieczeństwa Raz W Tygodniu</li>
                            <li>✓ Powiadomienia Email</li>
                        </ul>
                    </section>
                </Holder>

                <Holder>
                    <h3 className="advanced">Serwery Wirtualne <span>Advanced</span></h3>
                    <small>już od 159zł netto</small>
                    <section>
                        <h4>Co możemy Ci Zaoferować?</h4>
                        <ul>
                            <li>✓ Powierzchnia dyskowa: 3GB/5GB</li>
                            <li>✓ Konto FTP</li>
                            <li>✓ Max 5 kont mailowe</li>
                            <li>✓ Kopia Bezpieczeństwa Co drugi dzień</li>
                            <li>✓ Oprogramowanie antywirusowe</li>
                            <li>✓ Powiadomienia Email i SMS</li>
                            <li>✓ Statystyki</li>
                        </ul>
                    </section>
                </Holder>

                <Holder>
                    <h3 className="professional">Serwery Wirtualne <span>Professional</span></h3>
                    <small>już od 339zł netto</small>
                    <section>
                        <h4>Co możemy Ci Zaoferować?</h4>
                        <ul>
                            <li>✓ Powierzchnia dyskowa: 10GB</li>
                            <li>✓ Konto FTP</li>
                            <li>✓ Nielimitowane konta mailowe</li>
                            <li>✓ Kopia Bezpieczeństwa Codziennie</li>
                            <li>✓ Oprogramowanie antywirusowe</li>
                            <li>✓ Powiadomienia Email i SMS</li>
                            <li>✓ Nielimitowana liczba domen</li>
                            <li>✓ Nielimitowana ilość baz danych</li>
                            <li>✓ Statystyki</li>
                            <li>✓ Autoresponder</li>
                        </ul>
                    </section>
                </Holder>

                <Holder>
                    <h3 className="professional-plus">Serwery Dedykowane <span>Professional+</span></h3>
                    <small>Zadzwoń aby się dowiedzieć</small>
                    <section>
                        <h4>Co możemy Ci Zaoferować?</h4>
                        <ul>
                            <li>✓ Powierzchnia dyskowa: 10GB</li>
                            <li>✓ Konto FTP</li>
                            <li>✓ Nielimitowane konta mailowe</li>
                            <li>✓ Kopia Bezpieczeństwa Codziennie</li>
                            <li>✓ Oprogramowanie antywirusowe</li>
                            <li>✓ Powiadomienia Email i SMS</li>
                            <li>✓ Nielimitowana liczba domen</li>
                            <li>✓ Nielimitowana ilość baz danych</li>
                            <li>✓ Statystyki</li>
                            <li>✓ Autoresponder</li>
                        </ul>
                    </section>
                </Holder>
            </Container>
        </section>*/}
        <Try>
            <section>
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
        </Try>
        </>
    )
}