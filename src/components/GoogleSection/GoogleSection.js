import React from "react"
import styled from "styled-components"
import WebsitePosition from "../../images/undraw_updates_et2k.svg"
import PerksOfGoogleAds from './PerksOfGoogleAds'

const BigInfo = styled.h2`
    text-align: left;
    font-size: 2.5rem;
    letter-spacing: .05rem;
    line-height: 120%;
    margin: 1rem 0 .65rem 0;

    &::after {
        content: '';
        display: block;
        width: 20rem;
        height: 2px;
        background-color: #B06AB3;
        margin-top: .3rem;
    }
`;

const WelcomeText = styled.p`
    font-size: 1.15rem;
    color: #333;
    line-height: 150%;
    margin-bottom: 2.5rem;
`;

const SellingPointsWrapper = styled.section`
    padding: 0 5rem 0 3rem;
    color: #222;
`;

const GoogleContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .imageHolder {
        display: flex;
        justify-content: center;

        img {
            width: 85%;
        }
    }
`;

const GoogleSection = () => {
    return (
        <>
            <GoogleContainer className="margin-top-medium">
                <div className="imageHolder">   
                    <img src={WebsitePosition} alt="Pozycjonowanie Strony" />
                </div>

                <SellingPointsWrapper>
                    <BigInfo>Google Adwords</BigInfo>
                    <div>
                        <WelcomeText>Google Ads to obecnie najefektywniejszy system reklamowy w internecie. Google Ads umożliwia reklamowanie się zarówno w najpopularniejszej wyszukiwarce Google, jak i na 
                            innych stronach internetowych należących do Google. Poprzez to medium, możemy tworzyć reklamy w formie krótkiego klipu wideo, 
                            reklamy tekstowe wyświetlane podczas wyszukiwania, reklamy produktowe oraz reklamy displayowe w formie banerów.</WelcomeText>
                    </div>
                    <PerksOfGoogleAds/>
                </SellingPointsWrapper>
            </GoogleContainer>
        </>
    )
}

export default GoogleSection;