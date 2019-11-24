import React from "react"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"

export default () => (
    <MainLayout>
        <h1>Hosting Stron Internetowych</h1>
        <section className="flex">
            <SellCard title_type="Serwery Wirtualne" title_name="Basic 1GB" price="109zł"/>
            <SellCard title_type="Serwery Wirtualne" title_name="Basic+ 2GB" price="139zł"/>
            <SellCard title_type="Serwery Wirtualne" title_name="Advanced 3GB" price="159zł"/>
            <SellCard title_type="Serwery Wirtualne" title_name="Advanced+ 5GB" price="209zł"/>
            <SellCard title_type="Serwery Wirtualne" title_name="Professional 10GB" price="339zł"/>
            <SellCard title_type="Serwery Dedykowane" title_name="Professional+ ~200GB" price="Zadzwoń"/>
        </section>
        <ContactUs/>
    </MainLayout>
)
