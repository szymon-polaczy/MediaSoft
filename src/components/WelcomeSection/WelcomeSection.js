import React from 'react'
import styled from 'styled-components'
import WelcomeSVG from '../../images/undraw_stand_out_1oag.svg'

const WelcomeSection = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    position: relative;
    overflow    : hidden;

    section {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
    }

    section:nth-child(1) {
        padding-left: 3vw;
        box-sizing: border-box;
    }

    h1 {
        font-size: 4.5rem;
        text-align: left;
        width: 100%;
        padding-right: 5vw;
        box-sizing: border-box;
    }

    h2 {
        font-size: 1.5rem;
        font-style: italic;
    }

    h1 span {
        color: var(--theme-color);
    }

    p {
        text-align: justify;
        padding-right: 5vw;
        width: 100%;
        box-sizing: border-box;
        line-height: 150%;
        margin-top: 2rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
    }

    button {
        border: 2px solid var(--theme-color-darker);
        outline: none;
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background: #fff;
        margin-left: .65rem;
        margin-top: 2rem;
        box-shadow: -.65rem .65rem 0 var(--theme-color);
        transition: .15s all ease-out;
    }

    button:hover {
        box-shadow: -.3rem .3rem 0 var(--theme-color);
        transition: .15s all ease-out;
    }

    button:active {
        box-shadow: none;
        transform: skewX(-3deg);
        transition: .15s all ease-out;
    }

    .interesting-bg {
        position: absolute;
        top: 0;
        right: 150px;
        width: 500px;
        height: 150vh;
        background: #a7c5f2;
        transform: skewX(30deg);
        z-index: -1;
    }
`;

export default () => {
    return (
        <WelcomeSection>
            <section>
                <h1>Witamy w <span>Media</span>Soft</h1>
                <h2>Profesjonalna Obsułga Stron Internetowych</h2>
                <p>Od 2003 roku zajmujemy się kompleksową obsługą firm pragnących zaistnieć w Internecie 
                    oraz zwiększyć efektywność swoich stron internetowych. Przez ten czas wykonaliśmy 
                    blisko 300 stron internetowych, zarejestrowaliśmy w katalogach i wyszukiwarkach 
                    oraz wypozycjonowaliśmy do TOP10 w Google.pl jeszcze więcej stron. W naszej ofercie znajduje się także 
                    stabilny hosting - serwery wirtualne oraz tanie domeny. Zapraszamy do zapoznania 
                    się z naszą ofertą oraz odwiedzenia naszego portfolio stron WWW.</p>
                <button>Dowiedz się więcej</button>
            </section>
            <section>
                <img src={WelcomeSVG} alt="Witamy w MediaSoft!" />
            </section>
            <div className="interesting-bg"></div>
        </WelcomeSection>
    )
}