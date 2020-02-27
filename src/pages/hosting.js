import React from "react"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"
import { Link } from "gatsby"
import styled from 'styled-components'

const UL = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;

    li {
        displaY: inline-block;
        padding: .35rem .65rem;
        line-height: 125%;
        font-size: 1.35rem;
    }
`

export default () => (
    <MainLayout>
    <h1>Hosting Stron Internetowych</h1>
        <section>
            <div className="wrapper flex">
                <SellCard title_type="Serwery Wirtualne" title_name="Basic 1GB" price="109zł"/>
                <SellCard title_type="Serwery Wirtualne" title_name="Basic+ 2GB" price="139zł"/>
                <SellCard title_type="Serwery Wirtualne" title_name="Advanced 3GB" price="159zł"/>
                <SellCard title_type="Serwery Wirtualne" title_name="Advanced+ 5GB" price="209zł"/>
                <SellCard title_type="Serwery Wirtualne" title_name="Professional 10GB" price="339zł"/>
                <SellCard title_type="Serwery Dedykowane" title_name="Professional+ ~200GB" price="Zadzwoń"/>
            </div>
        </section>
        <ContactUs/>
        <h1>Możliwości Serwerów Wirutalnych</h1>
        <section className="pad-it p-blocking">
            <UL className="wrapper">
                <li>Powierzchnia dyskowa</li>
                <li>Transfer serwera wirtualnego</li>
                <li>Dowolny podział powierzchni serwera wirtualnego</li>
                <li>Nielimitowana liczba domen wskazujących na katalogi</li>
                <li>Nielimitowana liczba kont e-mail</li>
                <li>Nielimitowana liczba aliasów pocztowych</li>
                <li>Nielimitowana liczba baz danych</li>
                <li>Oprogramowanie antywirusowe</li>
                <li>Zabezpieczenie antyspamowe</li>
                <li>Panel do obsługi serwera wirtualnego</li>
                <li>Monitor zajętości</li>
                <li>Harmonogram zadań</li>
                <li>Bezpieczne SFTP</li>
                <li>Autoryzacja SMTP</li>
                <li>Statystyki WWW i FTP</li>
                <li>Statystyki kont e-mail</li>
                <li>Catch-all dla poczty</li>
                <li>Autoresponder</li>
                <li>Powiadamianie SMS</li>
                <li>Konto FTP</li>
                <li>Dostęp przez FTP</li>
                <li>Dostęp do PHP</li>
                <li>Mechanizm skryptowy SSI</li>
                <li>Primary i secondary DNS</li>
                <li>Kopia bezpieczeństwa danych</li>
            </UL>
        </section>
        <h1>Regulamin</h1>
        <section className="regulations-section">
            <div className="wrapper flex">
                <p><Link to="hosting-regulations"><b>Regulamin</b></Link> śwadczenia usług hostingu z dnia 04.07.2018</p>
            </div>            
        </section>
    </MainLayout>
)
