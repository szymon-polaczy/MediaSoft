import React from "react"
import MainLayout from "../components/MainLayout"
import GoogleMapsEmbed from "../components/GoogleMapsEmbed"
import { useStaticQuery, graphql } from "gatsby"
import WelcomeSection from "../components/WelcomeSection"

export default () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5184) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
    <MainLayout>
        <main className="contact-main">
            <WelcomeSection img={data.file.childImageSharp.fluid} alt="Background Computer Image" message="Skontakuj się z nami"/>
            <section className="pad-it">
                <div className="wrapper">
                    <h1>MediaSoft</h1>
                    <p className="higher-text">Od 2003 roku zajmujemy się kompleksową obsługą firm pragnących zaistnieć w Internecie 
                        oraz zwiększyć efektywność swoich stron internetowych. Przez ten czas wykonaliśmy 
                        blisko 300 stron internetowych, zarejestrowaliśmy w katalogach i wyszukiwarkach 
                        oraz wypozycjonowaliśmy do TOP10 w Google.pl jeszcze więcej stron. Zwiększyliśmy 
                        odwiedzalność stron i podnieśliśmy im PageRank. W naszej ofercie znajduje się także 
                        stabilny hosting - serwery wirtualne oraz tanie domeny. Zapraszamy do zapoznania 
                        się z naszą ofertą oraz odwiedzenia naszego portfolio stron WWW.</p>
                </div>
            </section>
            <div className="wrapper pad-it flex flex-column">
                <h1>Skontaktuj się z nami</h1>
                <small>Skontakuj się z nami i dołącz do grona zadowolonych klientów</small>
                <div className="section-holder flex align-start justify-around">
                    <section>
                        <h3>Siedziba</h3>
                        <p>
                            MediaSoft <br/>
                            ul.Mariacka 37/7, 48-304 Nysa <br/>
                        </p>
                        <p>
                            Godziny pracy <br/>
                            Poniedziałek - Piątek <b>9:00-16:00</b>
                            <div className="warning flex">
                                <i className="fas fa-exclamation"></i>
                                <p>Spotkania w naszym biurze <b>wyłącznie</b><br/>
                                po wcześniejszym umówieniu się telefonicznie.</p>
                            </div>
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
        <GoogleMapsEmbed/>
    </MainLayout>
    )
}
