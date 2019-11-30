import React from "react"

export default() => (
    <section className="contact-us-section">
        <div className="wrapper">
            <h1>Chcesz się z nami skontaktować?</h1>
            <div className="contain-contacts flex justify-around">
                <div>
                    <a href="mailto:kontakt@mediasoft.pl" className="contact-link flex justify-around">
                        <i className="fas fa-envelope"></i>
                        <p>kontakt@mediasoft.pl</p>
                    </a>
                </div>
                <div>
                    <a href="tel:501-442-493" className="contact-link flex justify-around">
                        <i className="fas fa-phone-alt"></i>
                        <p>501 442 493</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
)


