import React from 'react'
import { BigInfo } from '../../styles/info'
import { SectionContainer } from '../../styles/sections'
import PerksOfWorkingWithUsHolder from './PerksOfWorkingWithUsHolder'

const WorkPerksSection = () => {
    return (
        <SectionContainer>
			<BigInfo>Co dostaniesz tworząc z nami stronę?</BigInfo>
			<PerksOfWorkingWithUsHolder/>
        </SectionContainer>
    )
}

export default WorkPerksSection