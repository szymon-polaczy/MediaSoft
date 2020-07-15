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