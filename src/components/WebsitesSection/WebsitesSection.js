import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import AssetsLogoSVG from '../../images/undraw_mobile_wireframe_euf4.svg'

const BigInfo = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: .05rem;
    line-height: 120%;
    margin: 1rem 0 1.5rem 0;

    &::after {
        content: '';
        display: block;
        width: 4rem;
        height: 2px;
        background-color: #666;
        margin: .3rem auto 0 auto;
    }
`;

const SmallInfo = styled.small`
    line-height: 165%;
    text-align: center;
    color: #555;
    letter-spacing: .04rem;
    display: block;
    font-size: 1.2rem;
`;

const AssetsContainer = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;

    article {
        display: flex;
        align-items: center;
        jusitfy-content: center;
        flex-flow: column;
        padding: 1rem;
    }

    article i {
        font-size: 2.2rem;
        border: 2px solid #444;
        border-radius: 50%;
        padding: .45rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: .75rem;
        color: var(--theme-color);
        color: #ff677d;
    }

    article h3 {
        font-weight: bolder;
        font-size: 1.45rem;
        letter-spacing: .05rem;
        margin-bottom: .5rem;
    }

    article p {
        line-height: 140%;
        font-size: 1.2rem;
        color: #666;
        letter-spacing: .04rem;
    }

    .assets-logo img {
        max-width: 100%;
        max-width: 100%;
        object-fit: contain;
        margin: 0 auto;
    }
`;

const WebsitesContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1.3rem;

    box-shadow: inset 0px -46px 25px -17px rgba(255,255,255,1);

    .gatsby-image-wrapper {
        width: 320px;
        margin: .25rem .1rem;
        position: relative;
        z-index: -1;
    }
`;

const WebsitesContainerBtn = styled.button`
    margin: 1rem auto;
    display: block;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.4rem;
    letter-spacing: .2rem;
    color: #333;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export default () => {
    const data = useStaticQuery(graphql`
        query imageQuery {
            allFile(
                filter: {
                    extension: { regex: "/(png)/" }
                    relativeDirectory: { eq: "Websites" }
                }
            ) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <section className="margin-top-medium">
                <BigInfo>Co dostaniesz tworząc z nami stronę?</BigInfo>
                <div className="wrapper">
                    <AssetsContainer>
                        <article>
                            <i class="fas fa-mobile-alt"></i>
                            <h3>Strona responsywna  RWD</h3>
                            <p>Responsywna (dopasowująca się do urządzeń mobilnych) strona internetowa z indywidualną szatą graficzną.</p>
                        </article>
                        <article>
                            <i class="fas fa-cogs"></i>
                            <h3>panel administratora CMS</h3>
                            <p>Panel zarządzania stroną, dzięki któremu możesz m.in. samodzielnie dodawać treści do strony.</p>
                        </article>
                        <article>
                            <i class="fas fa-chart-line"></i>
                            <h3>optymalizacja strony</h3>
                            <p>Gwarantujemy wysoki wynik w audytach SEO. Twoja strona będzie się poprawnie wyświetlać na wszystkich popularnych przeglądarkach.</p>
                        </article>
                        <article>
                            <i class="fas fa-search"></i>
                            <h3>indeksacja strony</h3>
                            <p>Zaindeksujemy Twoją stronę internetową w wyszukiwarce google.</p>
                        </article>
                        <article className="assets-logo">
                            <img src={AssetsLogoSVG} alt="Wybierz co potrzebujesz na swojej stronie" />
                        </article>
                        <article>
                            <i class="fas fa-paint-brush"></i>
                            <h3>projekt graficzny</h3>
                            <p>Jeśli nie posiadasz swojego projektu graficznego to przygotujemy go specjalnie dla Ciebie</p>
                        </article>
                        <article>
                            <i class="fas fa-envelope"></i>
                            <h3>skrzynki pocztowe</h3>
                            <p>Będziesz miał możliwość tworzenia skrzynek w domenie strony, np. kontakt@twojafirma.pl</p>
                        </article>
                        <article>
                            <i class="fas fa-shopping-cart"></i>
                            <h3>Sklepy E-commerce</h3>
                            <p>Oferujemy wiodące w branży, bezpieczne i niezawodne systemy e-commerce, w tworzonych przez nas stronach www.</p>
                        </article>
                        <article>
                            <i class="fas fa-code"></i>
                            <h3>Szybkość Interakcji</h3>
                            <p>Wszystkie nasze strony internetowe są niestandardowo kodowane w lekkiej ramie, która jest zgodna z aktualnymi standardami projektowania stron internetowych i SEO.</p>
                        </article>
                    </AssetsContainer>
                </div>
            </section>
            <section className="margin-top-medium">
                <BigInfo>Oto Nasze Wybrane Realizacje</BigInfo>
                <SmallInfo className="wrapper">Strony internetowe wykonujemy od lat. W ich budowaniu doszliśmy do perfekcji. Możesz mieć pewność, 
                    że Twoja strona będzie unikatowa i wyróżniająca się na tle konkurencji. Poniżej prezentujemy nasze przykładowe realizacje.</SmallInfo>
                <WebsitesContainer>
                    {
                        data.allFile.edges.map(({node}) => (
                            <article>
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
                            </article>
                        ))
                    }
                    {
                        data.allFile.edges.map(({node}) => (
                            <article>
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
                            </article>
                        ))
                    }
                    {
                        data.allFile.edges.map(({node}) => (
                            <article>
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
                            </article>
                        ))
                    }
                    {
                        data.allFile.edges.map(({node}) => (
                            <article>
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
                            </article>
                        ))
                    }
                    {
                        data.allFile.edges.map(({node}) => (
                            <article>
                                <Img fluid={node.childImageSharp.fluid} alt={node.base.split(".")[0]} />
                            </article>
                        ))
                    }
                </WebsitesContainer>
                <WebsitesContainerBtn>Zobacz Więcej</WebsitesContainerBtn>
            </section>
        </>
    )
}