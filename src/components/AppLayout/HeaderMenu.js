import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const Navigation = styled.ul`
    display: flex;
    flex-flow: row;
    
    li {
        padding: 0 1rem;
        margin: .45rem 0;
    }
`;

const HeaderMenu = () => {
    return (
        <Navigation>
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/websites/">Strony WWW</Link></li>
            <li className="menu-item"><Link to="/hosting/">Hosting</Link></li>
            <li className="menu-item"><Link to="/domains/">Domeny</Link></li>
            <li className="menu-item"><Link to="/google/">Linki Sponsorowane</Link></li>
            <li className="menu-item"><Link to="/contact/">Kontakt</Link></li>
        </Navigation>
    )
}

export default HeaderMenu;