import React, { Component } from 'react'
import { Link } from 'react-scroll'


class MenuLinks extends Component {
    render() {
        return (
            <>
                <li className="menu-item">
                    <Link 
                        to="WelcomeSection" 
                        activeClass="active" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                        onClick={!this.props.closeMenu? null : () => this.props.closeMenu()}
                        >
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
                        duration={500}
                        onClick={!this.props.closeMenu? null : () => this.props.closeMenu()}
                        >
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
                        duration={500}
                        onClick={!this.props.closeMenu? null : () => this.props.closeMenu()}
                        >
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
                        duration={500}
                        onClick={!this.props.closeMenu? null : () => this.props.closeMenu()}
                        >
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
                        duration={500}
                        onClick={!this.props.closeMenu? null : () => this.props.closeMenu()}
                        >
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
                        duration={500}
                        onClick={!this.props.closeMenu? null : () => this.props.closeMenu()}
                        >
                            Kontakt
                    </Link>
                </li>
            </>
        )
    }
}

export default MenuLinks