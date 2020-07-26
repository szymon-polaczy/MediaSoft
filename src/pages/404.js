import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { BigInfo, SmallInfo } from '../styles/info'

const Application = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    min-height: 100vh;
`

const Heading = styled(BigInfo)`
    margin-top: 0;
`

const MainPageLink = styled(Link)`
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1.25rem;
    margin: 1.5rem auto 0 auto;
    display: block;
`

const pageNotFound = () => {
    return (
        <Application>
            <Heading>Strona 404</Heading>
            <SmallInfo>Strona której szukasz nie została znaleziona</SmallInfo>
            <MainPageLink to="/">Przejdź do strony głównej</MainPageLink>
        </Application>
    )
}

export default pageNotFound