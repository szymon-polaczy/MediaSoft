import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SectionContainer } from '../../styles/sections'
import { BigInfo, SmallInfo } from '../../styles/info'
import OurDoneProjectsHolder from './OurDoneProjectsHolder'

const DoneProjectsSection = () => {
    const CMS_DoneProjectsInfo = useStaticQuery(graphql`
    {
        datoCmsDoneprojectsinfo {
            info
        }
    }
    `)
    
    return (
        <SectionContainer>
            <BigInfo>Oto Nasze Wybrane Realizacje</BigInfo>
            <SmallInfo className="wrapper">{CMS_DoneProjectsInfo.datoCmsDoneprojectsinfo.info}</SmallInfo>
            <OurDoneProjectsHolder/>
        </SectionContainer>
    )
}

export default DoneProjectsSection