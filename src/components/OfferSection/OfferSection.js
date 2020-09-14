import React from 'react'
import styled from 'styled-components'

import Link from '../DefaultScrollLink'

const TrafficSignsHolder = styled.section`
	background: #DA609E;
	padding: 3.25rem 0;
	font-size: 2.5rem;
	color: #fff;
	text-align: center;
	margin: 3rem 0 7rem 0;

	h2 {
		margin-bottom: 3.25rem;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	article {
		padding: 1rem 0;
		border-right: 3px solid #fff;

		&:last-child {
			border: none;
		}

		a {
			color: inherit;

			i {
				margin-left: 1.2rem;
				font-size: 2rem;
			}
		}
	}

	@media (max-width: 1400px) {
		.container {
			grid-template-columns: 1fr 1fr;

			article {
				border: none;

				a {
					i {
						margin-left: .35rem;
					}
				}
			}
		}
	}

	@media (max-width: 750px) {
		.container {
			grid-template-columns: 1fr;
			padding: 0 .65rem;
		}
	}
`;

export default () => {
	return (
		<TrafficSignsHolder id="OfferSection">
			<h2>Co chcesz u nas sprawdzić?</h2>
			<section className="container">
				<article>
					<Link to="WebsitesSection">
						Strony WWW<i className="fas fa-code"></i>
					</Link>
				</article>
				<article>
					<Link to="WebsitesSection">
						Hosting<i className="fas fa-cogs"></i>
					</Link>
				</article>
				<article>
					<Link to="WebsitesSection">
						Domeny<i className="fas fa-search"></i>
					</Link>
				</article>
				<article>
					<Link to="WebsitesSection">
						Linki Sponsorowane<i className="fas fa-chart-line"></i>
					</Link>
				</article>
			</section>
		</TrafficSignsHolder>
	)
}