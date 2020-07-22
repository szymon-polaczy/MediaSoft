import React from 'react'
import { Link } from 'react-scroll'

const MenuLinks = () => {
    return (
        <ul>
            <li className="menu-item">
                <Link 
                    to="WelcomeSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Home
                </Link>
            </li>
            <li className="menu-item">
                <Link 
                    to="WebsitesSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Strony WWW
                </Link>
            </li>
            <li className="menu-item">
                <Link 
                    to="HostingSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Hosting
                </Link>
            </li>
            <li className="menu-item">
                <Link 
                    to="DomainsSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Domeny
                </Link>
            </li>
            <li className="menu-item">
                <Link 
                    to="GoogleSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Linki Sponsorowane
                </Link>
            </li>
            <li className="menu-item">
                <Link 
                    to="ContactSection" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}>
                        Kontakt
                </Link>
            </li>
        </ul>
    )
}

export default MenuLinks