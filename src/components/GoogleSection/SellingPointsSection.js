import React from 'react'
import styled from 'styled-components'
import { BigInfoLeft } from '../../styles/info'
import PerksOfGoogleAds from './PerksOfGoogleAds'
import { useStaticQuery, graphql } from 'gatsby'

const SellingPointsWrapper = styled.section`
    padding: 0 5rem 0 3rem;
`;

const WelcomeText = styled.p`
    font-size: 1.15rem;
    color: #333;
    line-height: 150%;
    margin-bottom: 2.5rem;

    @media (max-width: 1200px) {
        text-align: center;
    }
`;

const SellingPointsSection = () => {
    const CMS_GoogleAdsInfo = useStaticQuery(graphql`
    {
        datoCmsGoogleadsifno {
            info
        }
    }
    `)

    return (
        <SellingPointsWrapper>
            <BigInfoLeft>Google Adwords</BigInfoLeft>
            <WelcomeText>{CMS_GoogleAdsInfo.datoCmsGoogleadsifno.info}</WelcomeText>
            <PerksOfGoogleAds/>
        </SellingPointsWrapper>
    )
}

export default SellingPointsSection