import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainLayout from "../components/MainLayout"
import ContactUs from "../components/ContactUs"
import SellCard from "../components/SellCard"
import WelcomeSection from "../components/WelcomeSection"
import Contact from "../components/contact"
import Domains from "../components/domains"
import Google from "../components/google"
import Hosting from "../components/hosting"
import Websites from "../components/websites"

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
		<MainLayout>
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
			</main>
			<Contact/>
		</MainLayout>
	)
}

