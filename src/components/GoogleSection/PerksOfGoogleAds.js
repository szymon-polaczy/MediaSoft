import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const PerksHolder = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
`;

const Perk = styled.article`
    text-align: center;

    img {
        width: 1.9rem;
        margin-bottom: .65rem;
    }
        
    h3 {
        font-size: 1.2rem;
    
        b {
            font-weight: bold;
        }
    }
        
    p {
        font-size: .9rem;
        line-height: 135%;
        color: #5f5f5f;
        margin-top: .45rem;
    }
`;

const OnePerkOfGoogleAds = (perk) => {
    return (
        <Perk key={perk.id}>
            <img src={perk.icon.url} alt={perk.icon.alt}/>
            <h3><b>{perk.title}</b></h3>
            <p>{perk.description}</p>
        </Perk>
    )
}

const PerksOfGoogleAds = () => {
    const CMS_PerkOfGoogleAds = useStaticQuery(graphql`
    {
        allDatoCmsPerksofgooglead {
            nodes {
                icon {
                    alt
                    url
                }
                description
                title
                id
            }
        }
    }
  `)
    
    return (
        <PerksHolder>
            { CMS_PerkOfGoogleAds.allDatoCmsPerksofgooglead.nodes.map((perk) => OnePerkOfGoogleAds(perk))}
        </PerksHolder>
    )
}

export default PerksOfGoogleAds;