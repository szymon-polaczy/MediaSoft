import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Menu = styled.nav`
	height: 5rem;
	box-shadow: 0 0 .5rem #d0d0d0;
	position: fixed;
	width: 100%;
	background: #fff;
	top: 0;
	z-index: 100;
	
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;

		ul {
			display: flex;
			flex-flow: row;

			li {
			   padding: 0 1rem;

			   a {
				   color: #222;
			   }
		   }
		}
	}
`;

export default () => {
	return (
		<Menu>
			<div className="wrapper">
				<img src="https://mediasoft.com.pl/jpg/media-logo.png" alt="MediaSoft Logo"/>
				<ul>
					<li className="menu-item"><Link to="/">Home</Link></li>
					<li className="menu-item"><Link to="/websites/">Strony WWW</Link></li>
					<li className="menu-item"><Link to="/hosting/">Hosting</Link></li>
					<li className="menu-item"><Link to="/domains/">Domeny</Link></li>
					<li className="menu-item"><Link to="/google/">Linki Sponsorowane</Link></li>
					<li className="menu-item"><Link to="/contact/">Kontakt</Link></li>
				</ul>
			</div>
		</Menu>
	)
}