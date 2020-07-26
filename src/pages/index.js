import React from "react"
import AppLayout from '../components/AppLayout/AppLayout'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import OfferSection from '../components/OfferSection/OfferSection'
import WebsitesSection from '../components/WebsitesSection/WebsitesSection'
import QuickContactSection from '../components/QuickContactSection/QuickContactSection'
import HostingSection from '../components/HostingSection/HostingSection'
import DomainsSection from '../components/DomainsSection/DomainsSection'
import GoogleSection from '../components/GoogleSection/GoogleSection'
import ContactSection from '../components/ContactSection/ContactSection'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
		title,
		description,
		keywords,
		author,
		lang
      }
    }
  }
`

export default ({data}) => {
	return (
			<>
				<Helmet htmlAttributes={{"lang": "en"}}>
					<meta charSet="utf-8"/>
					<title>{data.site.siteMetadata.title}</title>
					<meta name="description" content={data.site.siteMetadata.description} />
					<meta name="keywords" content={data.site.siteMetadata.keywords} />
					<meta name="author" content={data.site.siteMetadata.author} />
				</Helmet>
				<AppLayout>
					<WelcomeSection/>
					<OfferSection/>
					<WebsitesSection/>
					<QuickContactSection/>
					<HostingSection/>
					<DomainsSection/>
					<GoogleSection/>
					<ContactSection/>
				</AppLayout>
			</>
	)
}