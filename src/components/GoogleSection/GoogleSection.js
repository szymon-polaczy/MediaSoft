import React from "react"
import styled from "styled-components"
import WebsitePosition from "../../images/undraw_updates_et2k.svg"
import SellingPointsSection from "./SellingPointsSection";
import { SectionContainer } from '../../styles/sections'

const GoogleContainer = styled(SectionContainer)`
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
        <GoogleContainer>
            <div className="imageHolder">   
                <img src={WebsitePosition} alt="Pozycjonowanie Strony" />
            </div>

            <SellingPointsSection/>
        </GoogleContainer>
    )
}

export default GoogleSection;