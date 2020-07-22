import React from 'react'
import Hostings from '../../images/undraw_success_factors_fay0.svg'
import { SectionDoubleContainer } from '../../styles/sections'
import OurHostingSection from './OurHostingSection'

const HostingSection = () => {
    return (
        <SectionDoubleContainer textOnTheRight>
            <OurHostingSection/>
            <div className="image-container">
                <img src={Hostings} alt="Hosting Logo" />
            </div>
        </SectionDoubleContainer>
    )
}

export default HostingSection