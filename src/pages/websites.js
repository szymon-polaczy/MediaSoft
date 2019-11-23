import React from "react"
import MainLayout from "../components/MainLayout"
import WebsiteHolder from "../components/WebsiteHolder"
import ContactUs from "../components/ContactUs"
import image from "./320x180.png"

export default () => (
    <MainLayout>
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
