import React from "react"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"
import styled from "styled-components"

const Important = styled.span`
    color: var(--theme-color);
`;

const WelcomeText = styled.p`
    text-align: center;
    margin: 2.5rem 0;
    line-height: 150%;
    padding: 0 8.25rem;
    color: #4f4f4f;
`;

const SellingPointsWrapper = styled.section`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.65rem;
    grid-row-gap: 1.65rem;
    color: #222;

    b {
        font-weight: bold;
    }

    article i {
        color: var(--theme-color);
        font-size: 2rem;
        margin-bottom: .65rem;
    }

    article h3 {
        font-size: 1.2rem;
    }

    article p {
        line-height: 125%;
        color: #5f5f5f;
        margin-top: .45rem;
    }
`;

export default () => (
    <MainLayout>
        <main>
            <h1>Reklama w <Important>Google Ads</Important></h1>
            <small>Poznaj Linki Sponsorowane z MediaSoft</small>
            <div className="wrapper">
                <WelcomeText>Google Ads to obecnie najefektywniejszy system reklamowy w internecie. Ponad 25% wszystkich reklam pojawiających się w sieci, to właśnie jego zasługa. Google Ads umożliwia reklamowanie się zarówno w najpopularniejszej wyszukiwarce Google, jak i na innych stronach internetowych należących do Google. Poprzez to medium, możemy tworzyć reklamy w formie krótkiego klipu wideo, reklamy tekstowe wyświetlane podczas wyszukiwania, reklamy produktowe oraz reklamy displayowe w formie banerów.</WelcomeText>
            </div>     

            <SellingPointsWrapper className="wrapper">
                <article>
                    <i class="fas fa-database"></i>
                    <h3><b>Płacisz</b> tylko za wynik</h3>
                    <p>Płatność pobierana jest tylko za kliknięcie w reklamę. (Pay per Click)</p>
                </article>
                <article>
                    <i class="fas fa-desktop"></i>
                    <h3><b>Błyskawiczny </b> efekt</h3>
                    <p>Natychmiastowe wyświetlenie na pierwszej stronie wyszukiwarki Google.</p>
                </article>
                <article>
                    <i class="fas fa-universal-access"></i>
                    <h3><b>Dowolny </b> zasięg</h3>
                    <p>Reklama w promieniu Twojego miasta, regionu, kraju a nawet całego globu.</p>
                </article>
                <article>
                    <i class="fas fa-comments-dollar"></i>
                    <h3><b>Gwarantowany </b> wzrost</h3>
                    <p>Czytelne statystyki na temat ilości kliknięc w reklamy i ich kosztów.</p>
                </article>
                <article>
                    <i class="fas fa-user-shield"></i>
                    <h3><b>Wsparcie </b> profesjonalistów</h3>
                    <p>Wsparcie profejsonalistów dla jak największego zadowolenia klienta.</p>
                </article>
                <article>
                    <i class="fas fa-history"></i>
                    <h3><b>Brak zobowiązań</b></h3>
                    <p>Zawieś swoją kampanię kiedy chcesz.</p>
                </article>
                <article>
                    <i class="fas fa-sort-amount-up"></i>
                    <h3><b>Raportowanie</b> cotygodniowe</h3>
                    <p>Co tygodniowy pełny raport z działania kampanii przesłane do klienta.</p>
                </article>
                <article>
                    <i class="fas fa-user-friends"></i>
                    <h3><b>Kontroluj </b> swoje kampanie</h3>
                    <p>Wybieraj czas, słowa kluczowe i kapitał przeznaczony na kampanię.</p>
                </article>
                <article>
                    <i class="fas fa-user-tie"></i>
                    <h3><b>Niezawodna obsługa</b></h3>
                    <p>Szczegółowa obsługa kampanii 7 dni w tygodniu.</p>
                </article>
                <article>
                    <i class="fas fa-stopwatch"></i>
                    <h3><b>Rozpocznij</b> kampanię już teraz</h3>
                    <p>Start kampani do 24h od omówienia w dni robocze.</p>
                </article>
                <article>
                    <i class="fas fa-gem"></i>
                    <h3><b>Bonus </b> dla nowych klientów</h3>
                    <p>Otrzymaj dodatkowe 250zł na start swojej kampanii.</p>
                </article>
            </SellingPointsWrapper>
        </main>
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
