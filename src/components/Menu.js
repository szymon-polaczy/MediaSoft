import React from "react"
import { Link } from "gatsby"
import { stack as Menu } from 'react-burger-menu'

export default () => {
	return (
		<Menu right>
			<li className="menu-item"><Link to="/">Home</Link></li>
			<li className="menu-item"><Link to="/websites/">Strony WWW</Link></li>
			<li className="menu-item"><Link to="/hosting/">Hosting</Link></li>
			<li className="menu-item"><Link to="/domains/">Domeny</Link></li>
			<li className="menu-item"><Link to="/google/">Linki Sponsorowane</Link></li>
			<li className="menu-item"><Link to="/contact/">Kontakt</Link></li>
		</Menu>
	)
}