import React from "react"
import { Link } from "gatsby"

export default () => (
    <footer className="main-footer">
        <div className="main-footer-top">
            <div>
                <h3>MediaSoft</h3>
                <p>
                    <span>Mariacka 37/7</span>
                    <span>48-304 Nysa</span>
                </p>
                <p>
                    <span><b>NIP:</b> 7531856967</span>
                    <span><b>REGON:</b> 532401810</span>
                </p>
                <p>
                    <span>Numer konta: <b>Nazwa Banku</b></span>
                    <span>99 9999 9999 9999 9999 9999 9999</span>
                </p>
            </div>
            <div className="contact-section">
                <h3>Skontaktuj się z nami:</h3>
                <p>
                    <span>E-mail: <b><a href="mailto:mediasoft@mediasoft.pl">mediasoft@mediasoft.pl</a></b></span>
                    <span>Tel.stacjonarny: <b><a href="tel:77-433-16-15">77 433 16 15</a></b></span>
                    <span>Tel.komórkowy <b><a href="tel:501-442-493">501 442 493</a></b></span>
                </p>
            </div>
        </div>
        <div className="main-footer-bottom">
            <div>
                <p>Copytight &copy; MediaSoft</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/cookies-policy/">Polityka Cookies</Link></li>
                    <li><Link to="/privacy-policy/">Polityka Prywatności</Link></li>
                </ul>
            </nav>
        </div>
    </footer>
)