import React from 'react'
import styled from 'styled-components'
import OurHostingTiers from './OurHostingTiers'
import { BigInfoLeft } from '../../styles/info'
import { useStaticQuery, graphql } from 'gatsby'

const Heading = styled.h4`
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

    @media (max-width: 1200px) {
        text-align: center;
        padding: 0 .65rem;
        line-height: 120%;

        &::after {
            margin: .3rem auto .65rem auto;
        }
    }

    @media (max-width: 450px) {
        &::after {
            width: 4rem;
        }
    }
`

const Info = styled.p`
    line-height: 150%;
    font-size: 1.2rem;
    color: #333;
    letter-spacing: 0.03rem;

    @media (max-width: 1200px) {
        text-align: center;
        padding: 0 .85rem;
    }
`;

const OurHostingSection = () => {
    const CMS_HostingInfo = useStaticQuery(graphql`
    {
        datoCmsHostinginfo {
            info
        }
    }
    `)

    return (
        <section>
            <BigInfoLeft>Oto Hostingi Jakie Oferujemy</BigInfoLeft>
            <OurHostingTiers/>
            <Heading>Co dostaniesz na naszym hostingu</Heading>
            <Info>{CMS_HostingInfo.datoCmsHostinginfo.info}</Info>
        </section>
    )
}

export default OurHostingSection