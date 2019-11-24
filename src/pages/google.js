import React from "react"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"

export default () => (
    <MainLayout>
        <section>
            <h1>Linki Sponsorowane</h1>
            <small>Poznaj Linki Sponsorowane z MediaSoft</small>
            <div className="wrapper higher-text">
                <p>Jest to reklama AdWords w wyszukiwarce Google wyeksponowana na samej 
                    górze wyników wyszukiwania (pozycja 1-3) lub z prawej strony wyników 
                    wyszukiwania w taki sposób, aby nie pomylić jej z niekomercyjnymi 
                    wynikami wyszukiwania. Linki sponsorowane składają się z nagłówka, 
                    tekstu reklamy oraz linku przekierowywującego do reklamowanej strony WWW.</p>
                <p>Zalety linków sponsorowanych AdWords w Google obsługiwanych przez MediaSoft:</p>
                <ul>
                    <li>Otrzymanie 250 zł GRATIS na start każdej kampanii.</li>
                    <li>Bezpośrednie wsparcie przez Google Polska przez cały okres działania kampanii.</li>
                    <li>Możliwość wyświetlania linku nawet na pierwszej pozycji od góry na pierwszej stronie wyników wyszukiwania.</li>
                    <li>Przygotowanie najbardziej trafnych słów kluczowych oraz treści reklam przez specjalistów AdWords.</li>
                    <li>Szczegółowy podział kampanii umożliwiajacy zmaksymalizowanie trafności, ilości odzwiedzin strony i oszczędności przeznacznych środków.</li>
                    <li>Wyświetlanie się linku w dni tygodnia i godziny ustalone przez klienta.</li>
                    <li>Wyświetlanie się linku na wybranym przez klienta obszarze np. woj. mazowieckie, cała Polska, Niemcy i Francja, 30 km w obrębie firmy, itp.</li>
                    <li>Możliwość wyboru wyświetlania się linku tylko w Google lub w Google i sieci partnerskiej (strony z wyszukiwarką Google i reklamami AdSense).</li>
                    <li>Możliwość wyboru wyświetlania się linku tylko na komputerach stacjonarnych i przenośnych lub również na urządzeniach mobilnych np. iPhone.</li>
                    <li>Co tydzień pełny raport z działania kampanii Adwords przesyłany e-mailem do klienta.</li>
                    <li>Szczegółowa obsługa kampanii 7 dni w tyogdniu.</li>
                    <li>Możliwość zmiany przez klienta słów kluczowych.</li>
                    <li>Każde słowo ma osobno ustalaną cenę.</li>
                    <li>Dowolna miesięczna kwota przeznaczona przez klienta na kampanię AdWords.</li>
                    <li>Możliwość zawieszenia działania linku w dowolnym czasie.</li>
                    <li>Stałe doradztwo specjalistów Adwords.</li>
                    <li>Start linku do 24h w dni robocze.</li>
                </ul>
            </div>
        </section>
        <ContactUs/>
        <section>
            <div className="wrapper higher-text pad-it">
                <h1>Opłaty</h1>
                <p>Opłata pobierana jest przez Google w momencie kliknięcia w link sponsorowany przez osobę korzystającą 
                    z wyszukiwarki. Otwarcie reklamowanej strony WWW powoduje pobranie opłaty. Wysokość opłat uzależniona 
                    jest od rodzaju słowa kluczowego oraz pozycji linku 1-3 u góry lub dalsze pozycje z prawej strony. 
                    Przeznaczając np. 300 zł netto miesięcznie dzielimy ta kwotę na 30 dni. Wówczas dziennie przeznaczone 
                    jest 10 zł netto. Link będzie wyświetlać się do momentu wyczerpania w danym dniu tej kwoty po czym 
                    wyłączy się, aby ponownie zacząć działać na następny dzień znów z limitem 10 zł netto itd. Blokada 
                    zliczania kliknięć z 1 adresu IP gwarantuje, że środki nie zostaną wyklikane np. przez konkurencyjne 
                    firmy. Czas uruchomienia linku do 24 h po otrzymaniu wpłaty (dni robocze), którą przesyłamy do Google. 
                    Koszt obsługi przez MediaSoft uzalezniony jest od stopnia rozbudowania kampanii. <b>Korzystając z usług 
                    MediaSoft, link do Państwa strony może być nawet na pierwszym miejscu w wynikach wyszukiwania w Google zaledwie po 24h.</b></p>
            </div>
        </section>
    </MainLayout>
)
