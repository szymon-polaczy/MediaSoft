import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"
import WelcomeSection from "../components/WelcomeSection"
import GoogleMapsEmbed from "../components/GoogleMapsEmbed"

export default () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "LandingPage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5184) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    
  return(
    <MainLayout>
        <main>
            <WelcomeSection img={data.file.childImageSharp.fluid} alt="Background Computer Image" message="Profesjonalna Obsułga Stron Internetowych"/>
            <section className="pad-it">
                <div className="wrapper">
                    <h1>Nasza oferta</h1>
                    <div className="flex">
                        <SellCard title_type="" title_name="Strony WWW" price="Od 300zł"/>
                        <SellCard title_type="" title_name="Hosting" price="Od 109zł"/>
                        <SellCard title_type="" title_name="Domeny" price="Od 52zł"/>
                        <SellCard title_type="" title_name="Linki Sponsorowane" price="Od ~300zł"/>
                    </div>
                </div>
            </section>
            <ContactUs/>
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
        </main>
        <GoogleMapsEmbed/>
    </MainLayout>
  )
}

