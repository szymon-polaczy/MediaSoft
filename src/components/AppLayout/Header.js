import React from "react"
import styled from 'styled-components'
import Menu from './MainMenu'

const MenuContainer = styled.header`
	height: 5rem;
	box-shadow: 0 0 .5rem #d0d0d0;
	position: sticky;
	width: 100%;
	background: #fff;
	top: 0;
	z-index: 100;
	
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default () => {
	return (
		<MenuContainer>
			<div className="wrapper">
				<img src="https://mediasoft.com.pl/jpg/media-logo.png" alt="MediaSoft Logo"/>
				<Menu/>
			</div>
		</MenuContainer>
	)
}