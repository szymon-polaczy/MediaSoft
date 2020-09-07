import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'


const Tier = styled.article`
    margin-bottom: 1.3rem;

    h3 {
        font-size: 1.35rem;
        letter-spacing: .02rem;
    }

    p {
        margin-top: .35rem;
        letter-spacing: .01rem;
    }

    @media (max-width: 1200px) {
        h3, p {
            text-align: center;
            padding: 0 .85rem;
        }
    }
`

const OneHostingTier = ({id, title, description}) => {
    return (
        <Tier key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
        </Tier>
    )
}

const OurHostingTiers = () => {
    const CMS_HostingTiers = useStaticQuery(graphql`
    {
        allDatoCmsHostingtier {
            nodes {
                id,
                title,
                description
            }
        }
    }
    `)

    return (
        <>
            {CMS_HostingTiers.allDatoCmsHostingtier.nodes.map((tier) => OneHostingTier(tier))}
        </>
    )
}

export default OurHostingTiers;