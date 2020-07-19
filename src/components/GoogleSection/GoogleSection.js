import React from "react"
import WebsitePosition from "../../images/undraw_updates_et2k.svg"
import SellingPointsSection from "./SellingPointsSection";
import { SectionDoubleContainer } from '../../styles/sections'

const GoogleSection = () => {
    return (
        <SectionDoubleContainer>
            <div className="image-container">   
                <img src={WebsitePosition} alt="Pozycjonowanie Strony" />
            </div>
            <SellingPointsSection/>
        </SectionDoubleContainer>
    )
}

export default GoogleSection;