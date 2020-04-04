import React from "react"
import styled from "styled-components"
import WebsitePosition from "../../images/undraw_updates_et2k.svg"

const BigInfo = styled.h2`
    text-align: left;
    font-size: 2.5rem;
    letter-spacing: .05rem;
    line-height: 120%;
    margin: 1rem 0 .65rem 0;

    &::after {
        content: '';
        display: block;
        width: 20rem;
        height: 2px;
        background-color: #B06AB3;
        margin-top: .3rem;
    }
`;

const WelcomeText = styled.p`
    font-size: 1.15rem;
    letter-spacing: 0.02rem;
    color: #333;
    line-height: 150%;
    text-align: left;
    margin-bottom: 2.5rem;
`;

const SellingPointsWrapper = styled.section`
    box-sizing: border-box;
    padding: 0 5rem 0 3rem;
    text-align: center;
    color: #222;

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1.5rem;
    }

    b {
        font-weight: bold;
    }

    article i {
        color: var(--theme-color);
        font-size: 1.9rem;
        margin-bottom: .65rem;
        color: #1c92d2;
        color: #ACB6E5;
    }

    article h3 {
        font-size: 1.2rem;
    }

    article p {
        font-size: .9rem;
        line-height: 135%;
        color: #5f5f5f;
        margin-top: .45rem;
    }
`;

const Try = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .imageHolder {
        display: flex;
        align-self: center;
        justify-content: center;
    }

    img {
        width: 85%;
    }
`;

export default () => {
    return (
        <>
            <Try className="margin-top-medium">
                <div className="imageHolder">   
                    <img src={WebsitePosition} alt="Pozycjonowanie Strony" />
                </div>

                <SellingPointsWrapper>
                    <BigInfo>Google Adwords</BigInfo>
                    <div>
                        <WelcomeText>Google Ads to obecnie najefektywniejszy system reklamowy w internecie. Google Ads umożliwia reklamowanie się zarówno w najpopularniejszej wyszukiwarce Google, jak i na 
                            innych stronach internetowych należących do Google. Poprzez to medium, możemy tworzyć reklamy w formie krótkiego klipu wideo, 
                            reklamy tekstowe wyświetlane podczas wyszukiwania, reklamy produktowe oraz reklamy displayowe w formie banerów.</WelcomeText>
                    </div>
                    <div className="container">
                        <article>
                            <i class="fas fa-database"></i>
                            <h3><b>Płacisz</b> tylko za wynik</h3>
                            <p>Płatność pobierana jest tylko za kliknięcie w reklamę. (Pay per Click)</p>
                        </article>
                        <article>
                            <i class="fas fa-desktop"></i>
                            <h3><b>Błyskawiczny </b> efekt</h3>
                            <p>Natychmiastowe wyświetlenie na pierwszej stronie Google.</p>
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
                            <i class="fas fa-umbrella"></i>
                            <h3><b>Ochrona </b> przed atakami</h3>
                            <p>Blokada zliczania kliknięć gwarantuje, że środki nie zostaną wyklikane np. przez konkurencyjne firmy.</p>
                        </article>
                        <article>
                            <i class="fas fa-gem"></i>
                            <h3><b>Bonus </b> dla nowych klientów</h3>
                            <p>Otrzymaj dodatkowe 250zł na start swojej kampanii.</p>
                        </article>
                    </div>
                </SellingPointsWrapper>
            </Try>
            {/*}
            <section>
                <div className="wrapper higher-text pad-it">
                    <h1>Jak to działa?</h1>
                    <small>Jak zostanie użyty twój kapitał?</small>
                    <WelcomeText>
                        Otwarcie reklamowanej strony WWW powoduje pobranie opłaty. Wysokość opłat uzależniona 
                        jest od rodzaju słowa kluczowego oraz pozycji linku 1-3 u góry lub dalsze pozycje z prawej strony. 
                        Przeznaczając np. 300 zł netto miesięcznie dzielimy ta kwotę na 30 dni. Wówczas dziennie przeznaczone 
                        jest 10 zł netto. Link będzie wyświetlać się do momentu wyczerpania w danym dniu tej kwoty po czym 
                        wyłączy się, aby ponownie zacząć działać na następny dzień znów z limitem 10 zł netto itd.
                        Koszt obsługi przez MediaSoft uzalezniony jest od stopnia rozbudowania kampanii. <b>Korzystając z usług 
                        MediaSoft, link do Państwa strony może być nawet na pierwszym miejscu w wynikach wyszukiwania w Google zaledwie po 24h.</b>
                    </WelcomeText>
                </div>
            </section>*/}
        </>
    )
}