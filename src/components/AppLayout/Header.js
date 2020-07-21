import React from "react"
import styled from 'styled-components'
import Menu from './MainMenu'
import Mediasoft from '../../images/mediasoft.png'

const MenuContainer = styled.header`
	height: 5rem;
	box-shadow: 0 0 .5rem #d0d0d0;
	position: sticky;
	width: 100%;
	background: #fff;
	top: 0;
	z-index: 100;
	
	img {
		max-height: 2em;
	}
	
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
				<img src={Mediasoft} alt="MediaSoft Logo"/>
				<Menu/>
			</div>
		</MenuContainer>
	)
}