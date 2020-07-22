import React from 'react'
import { SectionDoubleContainer } from '../../styles/sections'
import Hostings from '../../images/undraw_ask_me_anything_k8o0.svg'
import OurAvailableDomainsSection from './OurAvailableDomainsSection'

export default () => {
    return (
        <SectionDoubleContainer id="DomainsSection">
            <OurAvailableDomainsSection/>
            <div className="image-container">
                <img src={Hostings} alt="Hosting Logo" />
            </div>
        </SectionDoubleContainer>
    )
}