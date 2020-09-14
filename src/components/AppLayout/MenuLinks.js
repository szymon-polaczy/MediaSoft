import React from 'react'

import Link from '../DefaultScrollLink'

const MenuLinks = ({closeMenu}) => {
	return (
		<>
			<li className="menu-item">
				<Link to="WelcomeSection" children="Home" 
					onclick={!closeMenu? null : () => closeMenu()}/>
			</li>
			<li className="menu-item">
				<Link to="WebsitesSection" children="Strony WWW" 
					onclick={!closeMenu? null : () => closeMenu()}/>
			</li>
			<li className="menu-item">
				<Link to="HostingSection" children="Hosting" 
					onclick={!closeMenu? null : () => closeMenu()}/>
			</li>
			<li className="menu-item">
				<Link to="DomainsSection" children="Domeny" 
					onclick={!closeMenu? null : () => closeMenu()}/>
			</li>
			<li className="menu-item">
				<Link to="GoogleSection" children="Linki Sponsorowane" 
					onclick={!closeMenu? null : () => closeMenu()}/>
			</li>
			<li className="menu-item">
				<Link to="ContactSection" children="Kontakt" 
					onclick={!closeMenu? null : () => closeMenu()}/>
			</li>
		</>
	)
}

export default MenuLinks