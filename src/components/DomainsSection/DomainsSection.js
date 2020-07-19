import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from '../../styles/sections'
import { BigInfoRight } from '../../styles/info'
import { useStaticQuery, graphql } from "gatsby"
import Hostings from '../../images/undraw_ask_me_anything_k8o0.svg'

const DomainsContainer = styled(SectionContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    section {
        padding: 0 5rem;

        &:last-child {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        img {
            width: 100%;
            transform: translateX(-50px);
        }
    }

    .domains-wrapper {
        display: flex;
        justify-content: flex-end;
        flex-flow: wrap;
    }
`;

const Domain = styled.article`
    width: 11rem;
    height: 11rem;
    margin: 1.35rem;
    box-shadow: 0 0 .4rem #e6e6e6;
    text-align: center;
    font-size: 1.3rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    border-radius: .65rem;
    background: #fff;

    h4 {
        color: #fd746c;
        font-size: 1.8rem;
        letter-spacing: .03rem;
        padding-bottom: .65rem;
        font-weight: bold;
    }

    span {
        display: block;
        color: #3a7bd5;
        font-size: 1.45rem;
        letter-spacing: .02rem;
        padding: .75rem 0 .45rem 0;
        font-weight: bold;
    }

    p:last-child {
        font-size: 1rem;
        font-style: italic;
        margin-top: .4rem;
    }
`;

const OurAvailableDomain = (available_domain) => {
    return (
        <Domain key={available_domain.id}>
            <h4>{available_domain.domain}</h4>
            <p>Pierwszy rok <span>{available_domain.firstyearprice}zł</span></p>
            <p>Odnowienie {available_domain.normalprice}zł</p>
        </Domain>
    )
}

export default () => {
    const data = useStaticQuery(graphql`
    {
      allDatoCmsOuravailabledomain {
        nodes {
          normalprice
          firstyearprice
          domain
          id
        }
      }
    }
  `)

    return (
        <DomainsContainer>
            <section>
                <BigInfoRight>Wybierz domenę dla swojej strony</BigInfoRight>
                <div className="domains-wrapper">
                    { data.allDatoCmsOuravailabledomain.nodes.map(element => ( OurAvailableDomain(element) )) }
                </div>
            </section>
            <section>
                <img src={Hostings} alt="Hosting Logo" />
            </section>
        </DomainsContainer>
    )
}