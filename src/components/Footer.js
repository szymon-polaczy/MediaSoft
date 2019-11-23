import React from "react"
import { Link } from "gatsby"

export default () => (
    <footer className="main-footer">

        <div className="main-footer-top">
            <div className="wrapper">
                <div>
                    <h3>MediaSoft</h3>
                    <p>
                        Mariacka 37/7<br/>
                        48-304 Nysa
                    </p>
                    <p>
                        <b>NIP:</b> 7531856967<br/>
                        <b>REGON:</b> 532401810
                    </p>
                    <p>
                        Numer konta: <b>Nazwa Banku</b><br/>
                        48 9999 9999 9999 9999 9999 9999
                    </p>
                </div>
                <div className="contact-section">
                    <h3>Skontaktuj się z nami:</h3>
                    <p>
                        E-mail: <b><a href="mailto:mediasoft@mediasoft.pl">kontakt@mediasoft.pl</a></b><br/>
                        Tel.stacjonarny: <b><a href="tel:77-433-16-15">77 433 16 15</a></b><br/>
                        Tel.komórkowy <b><a href="tel:501-442-493">501 442 493</a></b><br/>
                    </p>
                </div>
            </div>
        </div>
        <div className="main-footer-bottom">
            <div className="wrapper">
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
        </div>
    </footer>
)