import React from "react"
import styled from 'styled-components'
import Menu from './MainMenu'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const MenuContainer = styled.header`
	height: 5rem;
	box-shadow: 0 0 .5rem #d0d0d0;
	position: sticky;
	width: 100%;
	background: #fff;
	top: 0;
	z-index: 100;
	
	.gatsby-image-wrapper {
		height: 32px;
		width: 125px;
	}
	
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;


const Header = () => {
	const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mediasoft.png" }) {
        childImageSharp {
          fixed(height: 32, width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

	return (
		<MenuContainer>
			<div className="wrapper">
				<Img fluid={data.file.childImageSharp.fixed} alt="" />
				<Menu/>
			</div>
		</MenuContainer>
	)
}

export default Header