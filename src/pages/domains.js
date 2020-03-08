import React from "react"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"

export default () => {
    return (
        <>
            <h1>Oferowane Domeny</h1>
            <section>
                <div className="wrapper flex">
                    <SellCard title_type="Domena" title_name=".pl" price="102zł"/>
                    <SellCard title_type="Domeny" title_name=".com.pl .org.pl .net.pl .biz.pl .info.pl" price="81zł"/>
                    <SellCard title_type="Domeny" title_name="regionalne" price="52zł"/>
                    <SellCard title_type="Domena" title_name=".com .org .net .biz .info" price="100zł"/>
                    <SellCard title_type="Domena" title_name=".eu" price="117zł"/>
                </div>
            </section>
            <ContactUs/>
            <h1>Korzyści z rejestracji</h1>
            <section>
                <div className="wrapper pad-it">
                    <ul className="higher-text">
                        <li>Profesjonalna pomoc w doborze właściwej nazwy domeny.</li>
                        <li>Pewność, że domena zostanie zarejestrowana na Państwa dane i Państwo będą jedynym jej właścicielem.</li>
                        <li>Powiadamianie o zbliżającym się terminie wygaśnięcia ważności domeny mailem oraz informacją dołączoną do przesłanej pocztą faktury.</li>
                        <li>W przypadku ewentualnego przeniesienia obsługi domeny do innego rejestratora, nie napotkają Państwo na żadne utrudnienia z naszej strony.</li>
                        <li>Jedne z najniższych cen na rynku, oszczędności nawet do 60%.</li>
                        <li>Bezpłatna pomoc w przeniesieniu obsługi domeny oraz płatności do nas.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}