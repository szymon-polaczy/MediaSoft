import React from 'react'
import styled from 'styled-components'
import Hostings from '../../images/undraw_success_factors_fay0.svg'
import OurHostingTiers from './OurHostingTiers'
import { useStaticQuery, graphql } from 'gatsby'

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
`;

const Info = styled.p`
    line-height: 150%;
    font-size: 1.2rem;
    color: #333;
    letter-spacing: 0.03rem;
`;

const HostingSection = () => {
    const CMS_HostingInfo = useStaticQuery(graphql`
    {
        datoCmsHostinginfo {
            info
        }
    }
    `)

    return (
        <HostingContainer>
            <section className="image-section">
                <img src={Hostings} alt="Hosting Logo" />
            </section>
            <section>
                <BigInfo>Oto Hostingi Jakie Oferujemy</BigInfo>
                <OurHostingTiers/>
                <h4>Co dostaniesz na naszym hostingu</h4>
                <Info>{CMS_HostingInfo.datoCmsHostinginfo.info}</Info>
            </section>
        </HostingContainer>
    )
}

export default HostingSection