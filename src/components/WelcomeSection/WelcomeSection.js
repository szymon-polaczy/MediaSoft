import React from 'react'
import styled from 'styled-components'
import WelcomeSVG from '../../images/undraw_stand_out_1oag.svg'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'react-scroll'

const WelcomeSectionStyled = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: calc(100vh - 5rem);
    position: relative;
    overflow: hidden;

    section {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
    }

    .message-section {
        padding-left: 3vw;
        box-sizing: border-box;

        h1 {
            font-size: 4.5rem;
            padding-right: 5vw;

            span {
                color: var(--theme-color);
            }
        }

        h2 {
            font-size: 1.5rem;
            font-style: italic;
        }

        p {
            line-height: 165%;
            text-align: justify;
            padding-right: 5vw;
            margin-top: 2rem;
            font-size: 1.1rem;
            letter-spacing: 1px;
        }
    }

    a {
        border: 2px solid var(--theme-color-darker);
        outline: none;
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background: #fff;
        margin-left: .65rem;
        text-align: center;
        margin-top: 2rem;
        cursor: pointer;
        box-shadow: -.65rem .65rem 0 var(--theme-color);
        transition: .15s all ease-out;

        &:hover {
            box-shadow: -.3rem .3rem 0 var(--theme-color);
            text-decoration: none;
        }

        &:active {
            box-shadow: none;
            transform: skewX(-3deg);
        }
    }

    @media (max-width: 1750px) {
        section img {
            width: 100%;
        }
    }

    @media (max-width: 1100px) {
        display: flex;
        flex-flow: column;
        padding: 0 2rem;
        min-height: calc(100vh - 5rem);
        justify-content: center;

        .message-section {
            padding: 0;

            h1 {
                margin-top: 2rem;
                padding: unset;
                text-align: center;
                padding:0 2rem;
            }

            h2 {
                margin-top: .65rem;
                text-align: center;
            }

            p {
                text-align: center;
                padding: 0 2rem;
                font-size: unset;
                line-height: 150%;
            }
        }

        section {
            align-items: center;
            
            img {
                opacity: .15;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: -1;
            }
        }
    }

    @media (max-width: 450px) {
        .message-section {
            h1 {
                font-size: 3.75rem;
            }

            p {
                padding: 0;
            }
        }
    }
`;

const InterestingBackground = styled.aside`
    position: absolute;
    top: 0;
    right: 150px;
    width: 500px;
    height: 150vh;
    background: #a7c5f2;
    transform: skewX(30deg);
    z-index: -1;

    @media (max-width: 1350px) {
        right: 7.5vw;
        transform: skewX(-10deg);
    }

    @media (max-width: 1100px) {
        display: none;
    }
`;

const WelcomeSection = () => {
    const CMS_MediasoftInfo = useStaticQuery(graphql`
    {
        datoCmsMediasoftinfo {
            info
        }
    }
    `)

    return (
        <WelcomeSectionStyled id="WelcomeSection">
            <section className="message-section">
                <h1>Witamy w <span>Media</span>Soft</h1>
                <h2>Profesjonalna Obsułga Stron Internetowych</h2>
                <p>{CMS_MediasoftInfo.datoCmsMediasoftinfo.info}</p>
                <Link 
                    to="OfferSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Dowiedz się więcej
                </Link>
            </section>
            <section>
                <img src={WelcomeSVG} alt="Witamy w MediaSoft!" />
            </section>
            <InterestingBackground></InterestingBackground>
        </WelcomeSectionStyled>
    )
}

export default WelcomeSection