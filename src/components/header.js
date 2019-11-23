import React from "react"
import { Link } from "gatsby"

export default () => (
    <header className="main-header">
        <div className="wrapper">
            <img src="https://mediasoft.com.pl/jpg/media-logo.png" alt="MediaSoft Logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/websites/">Strony WWW</Link></li>
                <li><Link to="/hosting/">Hosting</Link></li>
                <li><Link to="/domains/">Domeny</Link></li>
                <li><Link to="/google/">Linki Sponsorowane</Link></li>
                <li><Link to="/contact/">Kontakt</Link></li>
            </ul>
        </div>        
    </header>
)