import React from "react"
import AppLayout from '../components/AppLayout/AppLayout'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import OfferSection from '../components/OfferSection/OfferSection'
import WebsitesSection from '../components/WebsitesSection/WebsitesSection'
import ContactUsSection from '../components/ContactUsSection/ContactUsSection'
import HostingSection from '../components/HostingSection/HostingSection'
import DomainsSection from '../components/DomainsSection/DomainsSection'
import GoogleSection from '../components/GoogleSection/GoogleSection'
import ContactSection from '../components/ContactSection/ContactSection'
/*
import { useStaticQuery, graphql } from "gatsby"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"
import WelcomeSection from "../components/WelcomeSection"
import Contact from "../components/contact"
import Domains from "../components/domains"
import Google from "../components/google"
import Hosting from "../components/hosting"
import Websites from "../components/websites"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Example from "../components/Menu"
/*
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
		
	return (	
		<>		
			<Example/>
			<Header/>
			<main>
				<WelcomeSection img={data.file.childImageSharp.fluid} alt="Background Computer Image" message="Profesjonalna Obsułga Stron Internetowych"/>
				<section className="pad-it">
					<div className="wrapper">
						<h1>Nasza oferta</h1>
						<div className="flex">
							<SellCard title_type="" title_name="Strony WWW" price="Od 300zł" link="/websites"/>
							<SellCard title_type="" title_name="Hosting" price="Od 109zł" link="/hosting"/>
							<SellCard title_type="" title_name="Domeny" price="Od 52zł" link="domains"/>
							<SellCard title_type="" title_name="Linki Sponsorowane" price="Od ~300zł" link="/google"/>
						</div>
					</div>
				</section>
				<ContactUs/>
				<Domains/>
				<ContactUs/>
				<Google/>
				<ContactUs/>
				<Hosting/>
				<ContactUs/>
				<Websites/>
				<ContactUs/>
				<Contact/>
			</main>
			<Footer/>
		</>
	)
}
*/
export default () => {
	return (
		<AppLayout>
			<WelcomeSection/>
			<OfferSection/>
			<WebsitesSection/>
			<ContactUsSection/>
			<HostingSection/>
			<DomainsSection/>
			<GoogleSection/>
			<ContactSection/>
		</AppLayout>
	)
}