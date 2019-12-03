import React from "react"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"
import { Link } from "gatsby"

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
            <div className="wrapper flex flex-column align-start">
                <div>
                    <button>Powierzchnia dyskowa<i class="fas fa-plus"></i></button>
                    <p>Serwery wirtualne posiadają powierzchnię 1-5GB w zależności od rodzaju serwera Basic, 
                        Advanced, Advanced+, którą można samodzielnie zarządzać poprzez panel Net.admin.</p>
                </div>                

                <div>
                	<button>Transfer serwera wirtualnego<i class="fas fa-plus"></i></button>
                	<p>Jest to całkowita ilość danych jaką można przesłać od użytkowników do serwera wirtualnego 
                	    i z serwera wirtualnego do użytkowników. W ramach serwerów oferowany jest limit 2000 
                	    GB danych w czasie trwania okresu abonamentowego.</p>
                </div>

                <div>
                    <button>Dowolny podział powierzchni serwera wirtualnego<i class="fas fa-plus"></i></button>
                    <p>Powierzchnię dyskową można dowolnie dzielić między stronę WWW, konta e-mail i bazy 
                        danych za pomocą panelu do zarządzania serwerem Net.admin.</p>
                </div>

                <div>
                    <button>Nielimitowana liczba domen wskazujących na katalogi<i class="fas fa-plus"></i></button>
                    <p>Na serwerach wirtualnych można utrzymywać nielimitowaną liczbę domen wskazujących 
                        na katalogi zamieszczone na tym serwerze. Każdą z domen można przekierować na wybrany katalog, 
                        w którym będzie znajdować się osobna strona WWW. Natomiast konta poczty e-mail 
                        założone na serwerze będą funkcjonować dla głównej domeny serwera.</p>
                </div>

                <div>
                    <button>Nielimitowana liczba kont e-mail<i class="fas fa-plus"></i></button>
                    <p>Na serwerach wirtualnych można założyć nielimitowaną liczbę niezależnych kont e-mail. 
                        Dostęp do każdego konta odbywa się poprzez przeglądarkę internetową za pomocą 
                        programu do obsługi poczty Active.mail. Program ten umożliwia użytkownikowi na samodzielne zarządzanie swoim kontem pocztowym.</p>
                </div>

                <div>
                    <button>Nielimitowana liczba aliasów pocztowych<i class="fas fa-plus"></i></button>
                    <p>Alias pocztowy jest to alternatywny adres konta e-mail. Ilość aliasów, 
                        które można utworzyć na serwerach wirtualnych jest nieograniczona. Za 
                        pomocą aliasu pocztowego można posiadać kilka adresów kont e-mail wskazujących 
                        fizycznie na jedno konto e-mail. Np. stworzenie aliasu biuro@twojadomena.pl 
                        wskazującego na konto kontakt@twojadomena.pl spowoduje, że każdy e-mail 
                        wysłany na adres biuro@twojadomena.pl będzie docierał na konto kontakt@twojadomena.pl.</p>
                </div>

                <div>
                    <button>Nielimitowana liczba baz danych<i class="fas fa-plus"></i></button>
                    <p>Każdy serwer wirtualny pozwala na założenie nielimitowanej liczby baz danych MySQL 
                        i PostgreSQL w ramach samodzielnie przydzielonej przez użytkownika powierzchni 
                        w panelu do zarządzania serwerem Net.admin. Minimalna wielkość 
                        pojedynczej bazy danych wynosi 10MB, maksymalna wielkość wynosi 500MB.</p>
                </div>

                <div>
                    <button>Oprogramowanie antywirusowe<i class="fas fa-plus"></i></button>
                    <p>Oprogramowanie antywirusowe stosowane na serwerach wirtualnych pozwala 
                        chronić skrzynki pocztowe przed wirusami mogącymi znajdować się w otrzymywanych wiadomościach e-mail.</p>
                </div>

                <div>
                    <button>Zabezpieczenie antyspamowe<i class="fas fa-plus"></i></button>
                    <p>Filtr antyspamowy umożliwia zapobieganie otrzymywaniu niechcianych wiadomości 
                        e-mail tzw. spamów. Filtr ten zapobiega dostarczaniu poczty z adresów i 
                        serwerów pocztowych, które figurują na globalnej liście adresów rozpoznanych 
                        jako wysyłające spamy. Lista adresów jest aktualizowana 24h/7 dni w tygodniu. 
                        Każdy użytkownik ma również możliwość w panelu do zarządzania serwera Net.admin 
                        samodzielnego definiowania poziomów, dla których wiadomości będą rozpoznawane jako spam.</p>
                </div>

                <div>
                    <button>Panel Net.admin<i class="fas fa-plus"></i></button>
                    <p>Panel do obsługi serwera wirtualnego Net.admin pozwala na w pełni samodzielną 
                        administrację serwerem. Został on zaprojektowany specjalnie z myślą o indywidualnych 
                        użytkownikach korzystających z hostingu, którzy chcieliby samodzielnie zarządzać swoim 
                        serwerem. Za jego pomocą można samodzielnie zarządzać powierzchnią serwera, 
                        kontami e-mail, aliasami pocztowymi, filtrem antyspamowym, bazami danych, domenami, 
                        przeglądać statystyki transferu danych i odwiedzin strony. Dzięki temu nie ma 
                        potrzeby np. do korzystania ze statystyk odwiedzin oferowanych w innych firmach. 
                        Panele Net.admin zapewniają obsługę w 3 wersjach językowych PL, EN, DE.</p>
                </div>

                <div>
                    <button>Monitor zajętości<i class="fas fa-plus"></i></button>
                    <p>Monitor zajętości w panelu Net.admin do zarządzania serwerem umożliwia automatyczne 
                        sprawdzanie poziomu wykorzystania powierzchni dyskowej serwera, przydzielonej na stronę WWW, pocztę oraz bazy danych.</p>
                </div>

                <div>
                    <button>Harmonogram zadań<i class="fas fa-plus"></i></button>
                    <p>Harmonogram zadań CRON to usługa pozwalająca na uruchamianie w określonych stałych odstępach czasu krótkich 
                        skryptów wykonujących zaprogramowane czynności na serwerze. Skrypty CRON uruchamiane sš 
                        indywidualnie na życzenie klienta, po przesłaniu komendy skryptu do adinistaratorów MediaSoft.</p>
                </div>

                <div>
                    <button>Bezpieczne SFTP<i class="fas fa-plus"></i></button>
                    <p>Serwery wirtualne posiadają wbudowany protokół transmisji plików SFTP (SSH File Transfer Protocol), 
                        który pozwala dużo bardziej bezpiecznie przesyłać dane do serwera i z serwera niż w przypadku zwykłego FTP.</p>
                </div>

                <div>
                    <button>Bezpieczne SSL na pocztę i WWW<i class="fas fa-plus"></i></button>
                    <p>SSL (Secure Socket Layer) to bezpieczna transmisja zaszyfrowanego strumienia danych, 
                        która umożliwia bezpiecznie wysyłać i odbierać pocztę e-mail oraz bezpiecznie 
                        komunikować się za pomocą przeglądarki internetowej ze stroną WWW.</p>
                </div>

                <div>
                    <button>Autoryzacja SMTP<i class="fas fa-plus"></i></button>
                    <p>Jest to autoryzacja użytkownika przez serwer poczty wychodzącej SMTP 
                        (Simple Mail Transfer Protocol) i polega na weryfikacji przez serwer 
                        loginu i hasła użytkownika w czasie próby wysłania wiadomości. 
                        Zabezpieczenie to uniemożliwia wysłanie wiadomości z konta e-mail przez 
                        nieuprawnioną do tego osobę podającą Twój adres e-mail jako zwrotny.
                        Przeciwdziała to wykorzystaniu Twojego adresu konta e-mail np. do wysyłania spamu.</p>
                </div>

                <div>
                    <button>Statystyki WWW i FTP<i class="fas fa-plus"></i></button>
                    <p>Serwer wirtualny posiada wbudowane statystyki WWW, prezentujące 
                        szczegółowo informacje o odwiedzalności strony WWW i serwera FTP.</p>
                </div>

                <div>
                    <button>Statystyki kont e-mail<i class="fas fa-plus"></i></button>
                    <p>Na serwerze wirtualnym wbudowane są statystyki serwera pocztowego SMTP i POP3.</p>
                </div>

                <div>
                    <button>Catch-all dla poczty<i class="fas fa-plus"></i></button>
                    <p>Funkcja serwera catch-all pozwala dostarczyć wiadomość wysłaną na dowolny adres 
                        e-mail w domenie serwera wirtualnego(nawet na nie istniejący adres) na wskazany adres e-mail.</p>
                </div>

                <div>
                    <button>Autoresponder<i class="fas fa-plus"></i></button>
                    <p>Jest to automatyczna wiadomość zwrotna, która wysyła się w odpowiedzi na każdą wiadomość e-mail przychodzącą na konto.</p>
                </div>

                <div>
                    <button>Powiadamianie SMS<i class="fas fa-plus"></i></button>
                    <p>Umożliwia otrzymywanie na telefon komórkowy informacji tekstowej SMS o 
                        otrzymaniu na konto e-mail nowej wiadomości. SMS jest dostarczany za 
                        pośrednictwem usługi wybranego operatora telefonii komórkowej (bramki operatora).</p>
                </div>

                <div>
                    <button>Konto FTP<i class="fas fa-plus"></i></button>
                    <p>Dostęp do plików zamieszczonych na serwerze wirtualnym odbywa się za 
                        pomocą klienta FTP (File Transfer Protocol - programu do przesyłania plików na 
                        serwer). Umożliwia to między innymi wgranie strony WWW na serwer lub 
                        zamieszczenie na serwerze wielu stron WWW w odrębnych katalogach.</p>
                </div>

                <div>
                    <button>Dostęp przez FTP<i class="fas fa-plus"></i></button>
                    <p>Poprzez dostęp 24h/dobę do konta FTP (File Transfer Protocol) można 
                        samodzielnie w stosownym dla siebie czasie zamieścić na serwerze wirtualnym 
                        strony WWW, dokonywać ich aktualizacji oraz zarządzać znajdującymi się tam plikami.</p>
                </div>

                <div>
                    <button>Dostęp do PHP<i class="fas fa-plus"></i></button>
                    <p>Na serwerach wirtualnych uruchomiony jest interpreter języka PHP 5, który 
                        jest aktualizowany wkrótce po pojawieniu się nowej wersji interpretera.</p>
                </div>

                <div>
                    <button>Mechanizm skryptowy SSI<i class="fas fa-plus"></i></button>
                    <p>SSI (Server Side Includes) jest to mechanizm skryptowy służący do generowania stron 
                        WWW w sposób dynamiczny. Przede wszystkim używany jest do dołączania zdefiniowanych 
                        plików do dokumentu wynikowego. Domyślnie pliki generowane przez SSI posiadają rozszerzenie .shtml.</p>
                </div>

                <div>
                    <button>Primary i secondary DNS<i class="fas fa-plus"></i></button>
                    <p>Dzięki serwerom DNS (Domain Name System, system nazw domenowych) każda strona WWW 
                        zamieszczona na serwerach MediaSoft jest widoczna na całym świecie. W celu 
                        zapewnienia bezawaryjnego działania, udostępnione są dwa niezależne serwery DNS.</p>
                </div>

                <div>
                    <button>Kopia bezpieczeństwa danych<i class="fas fa-plus"></i></button>
                    <p>Dane zamieszczone na serwerach wirtualnych MediaSoft posiadają zabezpieczenie na 
                        wypadek utraty ich w postaci dodatkowych kopii. Aktualizacja kopii danych (backup) 
                        odbywa się 1 raz na 24 godziny (przeważnie w nocy). Dlatego zawsze dostępna jest kopia danych z ostatnich 24h.</p>
                </div>
            </div>
        </section>
        <h1>Regulamin</h1>
        <section className="regulations-section">
            <div className="wrapper flex">
                <p><Link to="hosting-regulations"><b>Regulamin</b></Link> śwadczenia usług hostingu z dnia 04.07.2018</p>
            </div>            
        </section>
    </MainLayout>
)
