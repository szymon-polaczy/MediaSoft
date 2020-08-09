import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'

const PolicyHolder = styled.main`
    strong {
        font-weight: bold;
    }

    p {
        margin: .65rem 0;
    }
`

const PrivacyPolicy = () => {
    const data = useStaticQuery(graphql`
    {
      datoCmsPrivacypolicy {
        policy
      }
    }
  `)

    return (
        <PolicyHolder>
            {ReactHtmlParser(data.datoCmsPrivacypolicy.policy)}
        </PolicyHolder>
    )
}

export default PrivacyPolicy