import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { BigInfoRight } from '../../styles/info'

const Section = styled.section`
    padding: 0 5rem;
    display: block;

    @media (max-width: 600px) {
        padding: 0;
    }
`

const AllDomains = styled.section`
    display: flex;
    justify-content: flex-end;
    flex-flow: wrap;

    @media (max-width: 1200px) {
        justify-content: center;
    }

    @media (max-width: 600px) {
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        overflow-x: scroll;
        max-width: 100vw;
        scroll-snap-type: x mandatory;
    }
`

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

    @media (max-width: 600px) {
        scroll-snap-align: center;

        min-width: 11rem;
    }

    h3 {
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
`

const OurAvailableDomain = ({id, domain, firstyearprice, normalprice}) => {
  return (
      <Domain key={id}>
          <h3>{domain}</h3>
          <p>Pierwszy rok <span>{firstyearprice}zł</span></p>
          <p>Odnowienie {normalprice}zł</p>
      </Domain>
  )
}

const OurAvailableDomainsSection = () => {
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
        <Section>
            <BigInfoRight>Wybierz domenę dla swojej strony</BigInfoRight>
            <AllDomains>{data.allDatoCmsOuravailabledomain.nodes.map(domain => ( OurAvailableDomain(domain)))}</AllDomains>
        </Section>
    )
}

export default OurAvailableDomainsSection