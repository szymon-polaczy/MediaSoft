import React from "react"
import MainLayout from "../components/MainLayout"
import WebsiteHolder from "../components/WebsiteHolder"
import ContactUs from "../components/ContactUs"
import image from "./320x180.png"

export default () => (
    <MainLayout>
        <section className="higher-text pad-it">
            <div className="wrapper">
                <h1>Tworzenie Stron Internetowych</h1>
                <p>Każda stworzona przez nas strona WWW jest przygotowywana indywidualnie pod 
                    wymagania klienta. Dlatego na początku projektu przeprowadzamy z klientem 
                    szczegółowy wywiad, aby dowiedzieć się jakie są jego oczekiwania odnośnie 
                    strony internetowej i jaką formę ma ona spełniać (informacyjną, sprzedażową, 
                    komunikacyjną, itp.). Podczas trwania całego projektu jesteśmy również cały 
                    czas w kontakcie z klientem. Doradzamy mu na każdym etapie prac i dzielimy 
                    się z nim naszym doświadczeniem - blisko 200 wykonanych stron WWW. Jednak to 
                    klient ma u nas ostatnie zdanie do powiedzenia, gdyż to on ma być zadowolony, 
                    a strona ma jemu przynosić korzyści ekonomiczne. Na podstawie uzyskanych od 
                    klienta informacji i otrzymanych materiałów opracowujemy podział strony oraz 
                    przygotowujemy projekt graficzny. Następnie po ewentualnych korektach i 
                    zatwierdzeniu projektu przez klienta przystępujemy do dalszych prac - 
                    programowania, tworzenia animacji i przygotowania pozostałych elementów graficznych.</p>
            </div>
        </section>
        <section className="higher-text pad-it">
            <div className="wrapper">
                <h1>Tworzenie Sklepów Internetowych</h1>
                <p>Sklepy internetowe stworzone przy pomocy oprogramowania MediaSoft, 
                    zapewniają wysoką skuteczność sprzedaży, łatwe zarządzanie sklepem 
                    oraz dotarcie do szerokich kręgów potencjalnych odbiorców. 
                    Umożliwiają skuteczną prezentację aktualnej oferty, przyjmowanie zamówień 
                    i ich dalszą obsługę w przyjazny dla użytkownika sposób. Dzięki łatwemu 
                    i intuicyjnemu w użyciu panelowi administracyjnemu zarządzanie sklepem 
                    jest przyjemne i nieskomplikowane. Sklepy zaprojektowane są tak, aby jak 
                    najbardziej zaoszczędzić Państwa czas przy wprowadzaniu i edycji towarów 
                    oraz obsłudze zleceń, a jednocześnie pozwalają na dokonanie satysfakcjonującego 
                    zakupu w bardzo krótkim czasie przez Państwa klientów. Dlatego oferowane przez 
                    nas sklepy internetowe uważane są za jedne z najlepszych dostępnych na rynku.</p>
            </div>
        </section>
        <section className="higher-text pad-it">
            <div className="wrapper">
                <h1>Panele MediaCMS</h1>
                <p>Panele MediaCMS to nowoczesne rozwiązania dla osób, które posiadają stronę internetową i 
                    chcieliby samodzielnie dokonywać aktualizacji treści, zdjęć, załączników, newsów oraz 
                    innych elementów strony. Oferowane przez nas autorskie panele MediaCMS można podłączyć 
                    praktycznie do każdej poprawnie wykonanej strony WWW. Panele są modyfikowane przez nas 
                    tak, aby optymalnie pasowały do każdej strony i były przystosowane do indywidualnych 
                    potrzeb konkretnego użytkownika. W panelu administracyjnym znajdują się tylko te 
                    funkcjonalności, które potrzebuje użytkownik, przez co jego obsługa jest łatwa i intuicyjna. 
                    Dzięki temu będą mogli Państwo samodzielnie w wygodnym dla siebie czasie i miejscu na 
                    świecie wprowadzać aktualizacje na swojej witrynie internetowej, a co najważniejsze 
                    nie płacąc za nie. Po podłączeniu panela MediaCMS do strony przeprowadzamy szkolenie 
                    z jego obsługi dla 1-2 osób.</p>
                <h3>Cennik Paneli MediaCMS</h3>
                <p>Koszty aktualizacji są uzależnione od ilości czasu, który należy poświęcić na edycję strony. 
                    Ceny aktualizacji zaczynają się już od 20 zł netto. W przypadku paneli MediaCMS koszt 
                    podłączenia panela jest uzależniony od ilości podstron oraz czy panel musi zostać najpierw 
                    rozbudowany o dodatkowe funkcje na życzenie klienta. Koszt podłączenia panela w wersji 
                    podstawowej do 10 podstron wynosi 600 zł netto. Koszt nie obejmuje ponownego uzupełniania 
                    strony oraz ewentualnych przeróbek strony, jeśli strona byłaby wykonana w sposób 
                    uniemożliwiający szybkie i poprawne podłączenie panela.</p>
                <h3>Możliwości Paneli MediaCMS</h3>
                <p>Ciężko wymienić wszystkie możliwości jakie dają nasze panele, bo takie rzeczy jak zmiana 
                    kroju czcionki, wielkości i koloru albo dodawanie linków w tekście lub tytułów "title" 
                    na zdjęciach i grafikach to jest standard w panelach MediaCMS. Dlatego poniżej 
                    przedstawiamy naszym zdaniem najważniejsze funkcjonalności. </p>

                <ul>
                    <li>Modyfikacja treści i zdjęć na każdej z podstron</li>
                    <li>Dowolny układ zdjęć w stosunku do treści</li>
                    <li>Dodawanie galerii miniatur zdjęć na każdej z podstron</li>
                    <li>Dodawanie w galeriach podpisów do zdjęć, które pokazują się pod zdjęciem przy powiększeniu w Lightboxie</li>
                    <li>Wyłączanie tymczasowe zdjęć w galeriach bez ich usuwania</li>
                    <li>Zamiana miejscami zdjęć w galeriach bez ponownego dodawania zdjęć - automatyczna zmiana kolejności przy powiększeniu w Lightoboxie</li>
                    <li>Wstawianie dowolnej ilości filmów z YouTube wraz z podpisem na każdej z podstron</li>
                    <li>Wyłączanie tymczasowe filmów bez ich usuwania</li>
                    <li>Dodawanie dowolnej ilości banerów JPG, PNG, SWF na każdej z podstorn w tym baner górnego - headera</li>
                    <li>Dodawanie dowolnej ilości załączników PDF, Word, Excel, JPG, PNG wraz z podpisami na każdej z podstorn</li>
                    <li>Szybkie uzupełnianie na 1 stronie w panelu, aż 5 wersji językowych strony PL, EN, DE, CZ, RU</li>
                    <li>Dodawanie w galeriach podpisów do zdjęć w wersjach językowych PL, EN, DE, CZ, RU (na stronie widoczny osobny podpis dla danej wersji języka)</li>
                    <li>Dodawanie pod filmami podpisów w wersjach językowych PL, EN, DE, CZ, RU (na stronie widoczny osobny podpis dla danej wersji języka)</li>
                    <li>Wyłączanie podstron w menu, bez ich usuwania</li>
                    <li>Zmiana kolejności podstron w menu</li>
                    <li>Wstawianie map Google w dowolnej wielkości na każdej z podstron</li>
                    <li>Wstawianie kodu statystyk Google Analitycs</li>
                    <li>Modyfikacja meta tagów wspólnych dla wszystkich podstron oraz modyfikacja meta tagów dla każdej z podstron osobno</li>
                    <li>Ustawianie przyjaznych dla wyszukiwarek nazw linków URL dla każdej z podstron</li>
                    <li>Wstawianie tagów z linkami na każdej z podstron</li>
                </ul>

                <p>Powyższe funkcje są dostosowywane do zapotrzebowań klienta, ale większość z nich to 
                    nasz standard, który oferujemy w każdym z paneli MediaCMS. Istnieje także możliwość 
                    wykonania przez nas indywidualnych rozwiązań dostępnych przez panel jak np. obsługa zamówień.
                    Zajmując się pozycjonowaniem stron opracowując i rozbudowując już od 2005 roku panele 
                    MediaCMS szczególnie zwracaliśmy uwagę na to, aby były one jak najbardziej funkcjonalne 
                    i przyjazne dla użytkownika oraz, żeby dawały dużą swobodę działań związanych z SEO.</p>
            </div>
        </section>
        <section className="higher-text pad-it">
            <div className="wrapper">
                <h1>Opieka Nad Stronami</h1>
                <p>Jeśli posiadają Państwo swoją stronę internetową i nie mają czasu lub możliwości do 
                    wprowadzania aktualizacji bądź nie posiadają Państwo osoby/firmy, która opiekowałaby 
                    się stroną, to mogą Państwo zlecić nam tą usługę. Opieka nad stronami, panele 
                    MediaCMSStrony internetowe, które są na bieżąco aktualizowane z zasady są lepiej 
                    postrzegane przez odbiorców, a wyszukiwarki częściej odwiedzają strony na których 
                    zachodzą zmiany, co ma istotny wpływ na pozycjonowanie się strony.
                    Opieka przez nas nad stronami obejmuje: wprowadzanie i edycję materiałów (treści, zdjęć, elementów 
                    graficznych, załączników, itp.), dodawanie nowych podstron i modyfikowanie istniejących. 
                    Jeżeli zmiany na stronie są sporadyczne lub nieregularne, proponowaną przez nas formą 
                    współpracy są zlecenia indywidualne. Po otrzymaniu takiego zlecenia, dokonujemy wstępnej 
                    wyceny oraz podajemy przybliżony czas potrzebny na realizację zlecenia. W przypadku potrzeby 
                    wprowadzania częstych i regularnych zmian na stronach internetowych proponujemy umowę na stałą 
                    obsługę. Zlecenia stałe są realizowane przez nas priorytetowo. Również dla takich zleceń stosujemy upusty cenowe.</p>
            </div>
        </section>
        <section>
            <div className="wrapper">
                <h1>Nasze najnowsze realizacje</h1>
                <small>Zobacz co ostatnio wykonaliśmy</small>
                <div className="websites-show-off">
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Pierwsza"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Druga"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Nie Druga"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Kolejna"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Jeszcze Inna"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Strona"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Nie Strona"/>
                    <WebsiteHolder img_src={image} img_alt="Alt do zdjęcia" title="Strona Hmm"/>
                </div>
            </div>
        </section>
        <ContactUs/>
    </MainLayout>
)
