import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'
import Mediasoft from '../images/mediasoft.png'

const PolicyHolder = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2rem;

    strong {
        font-weight: bold;
    }

    p {
        margin: .65rem 0;
    }
`

const Img = styled.img`
    margin: 0 auto;
    padding: 3rem;
    display: block;
`

const LinkMe = styled(Link)`
    font-size: 1.4rem;
    margin: 2rem auto;
    text-align: center;
    display: block;
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
      <>
        <Link to="/"><Img src={Mediasoft} alt="Mediasoft"/></Link>
        <PolicyHolder>
            {ReactHtmlParser(data.datoCmsPrivacypolicy.policy)}
        </PolicyHolder>
        <LinkMe to="/">Powrót na stronę główną</LinkMe>
      </>
    )
}

export default PrivacyPolicy