import React from "react"
import MainLayout from "../components/MainLayout"

export default () => (
    <MainLayout>
        <main className="contact-main">
            <div className="wrapper">
                <h1>Skontaktuj się z nami</h1>
                <small>Skontakuj się z nami i dołącz do grona zadowolonych klientów</small>
                <div className="section-holder">
                    <section>
                        <h3>Siedziba</h3>
                        <p>
                            MediaSoft <br/>
                            ul.Mariacka 37/7, 48-304 Nysa <br/>
                        </p>
                        <p>
                            Godziny pracy <br/>
                            Poniedziałek - Piątek <b>9:00-16:00</b>
                            <span className="warning">
                                <i class="fas fa-exclamation"></i>
                                <p>Spotkania w naszym biurze <b>wyłącznie</b><br/>
                                po wcześniejszym umówieniu się telefonicznie.</p>
                            </span>
                        </p>
                    </section>
                    <section>
                        <h3>Kontakt</h3>
                        <p>
                            E-mail: <a href="mailto:mediasoft@mediasoft.pl">kontakt@mediasoft.pl</a> <br/>
                            Tel.komórkowy: <a href="tel:77-433-16-15">77 433 16 15</a> <br/>
                            Tel.stacjonarny: <a href="tel:501-442-493">501 442 493</a>
                        </p>                        
                    </section>
                    <section>
                        <h3>Konto bankowe i faktury</h3>
                        <p>
                            MediaSoft <br/>
                            ul.Mariacka 37/7, 48-304 Nysa <br/>
                            NIP: 7531856967
                        </p>
                        <p>
                            Numer konta: Nazwa Banku <br/>
                            48 9999 9999 9999 9999 9999 9999
                        </p>
                    </section>
                </div>
            </div>
        </main>
    </MainLayout>
)
