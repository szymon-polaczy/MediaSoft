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
import { HeadProvider, Title, Meta } from 'react-head'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
		title,
		description,
		keywords,
		author
      }
    }
  }
`

export default ({data}) => {
	return (
		<HeadProvider>
			<Title>{data.site.siteMetadata.title}</Title>
			<Meta name="description" content={data.site.siteMetadata.description} />
			<Meta name="keywords" content={data.site.siteMetadata.keywords} />
			<Meta name="author" content={data.site.siteMetadata.author} />
   
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
		</HeadProvider>
	)
}