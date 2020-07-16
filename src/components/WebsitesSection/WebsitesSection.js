import React from 'react'
import styled from 'styled-components'
import AssetsLogoSVG from '../../images/undraw_mobile_wireframe_euf4.svg'
import OurDoneProjectsHolder from './OurDoneProjectsHolder'

const BigInfo = styled.h2`
	text-align: center;
	font-size: 2.5rem;
	letter-spacing: .05rem;
	line-height: 120%;
	margin: 1rem 0 1.5rem 0;

	&::after {
		content: '';
		display: block;
		width: 4rem;
		height: 2px;
		background-color: #666;
		margin: .3rem auto 0 auto;
	}
`;

const SmallInfo = styled.small`
	line-height: 165%;
	text-align: center;
	color: #555;
	letter-spacing: .04rem;
	display: block;
	font-size: 1.2rem;
`;

const AssetsContainer = styled.div`
	display: grid;
	gap: .5rem;
	grid-template-columns: 1fr 1fr 1fr;
	text-align: center;

	&::after {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		border-top: 90px solid transparent;
		border-left: 90px solid #FFAFBD;
		border-bottom: 90px solid transparent;
		border-right: 90px solid transparent;
	}

	&::before {
		content: '';
		display: block;
		position: absolute;
		right: 0;
		width: 10rem;
		height: 10rem;
		background: #ffc3a0;
		border-radius: 50%;
		transform: translateX(3rem) translateY(32rem);
	}

	article {
		display: flex;
		align-items: center;
		flex-flow: column;
		padding: 1rem;

		i {
			font-size: 2.2rem;
			border: 2px solid #444;
			border-radius: 50%;
			width: 4rem;
			height: 4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #ff677d;
		}
	
		h3 {
			font-weight: bolder;
			font-size: 1.45rem;
			letter-spacing: .05rem;
			margin: .75rem 0 .5rem 0;
		}
	
		p {
			line-height: 140%;
			font-size: 1.2rem;
			color: #666;
			letter-spacing: .04rem;
		}
	}

	.assets-logo img {
		max-width: 100%;
		max-width: 100%;
		object-fit: contain;
	}
`;

;

const WebsiteSection = () => {
  return (
	<>
	  <section className="margin-top-medium">
		<BigInfo>Co dostaniesz tworząc z nami stronę?</BigInfo>
		<div className="wrapper">
		  <AssetsContainer>
			<article>
			  <i className="fas fa-mobile-alt" />
			  <h3>Strona responsywna  RWD</h3>
			  <p>Responsywna (dopasowująca się do urządzeń mobilnych) strona internetowa z indywidualną szatą graficzną.</p>
			</article>
			<article>
			  <i className="fas fa-cogs" />
			  <h3>panel administratora CMS</h3>
			  <p>Panel zarządzania stroną, dzięki któremu możesz m.in. samodzielnie dodawać treści do strony.</p>
			</article>
			<article>
			  <i className="fas fa-chart-line" />
			  <h3>optymalizacja strony</h3>
			  <p>Gwarantujemy wysoki wynik w audytach SEO. Twoja strona będzie się poprawnie wyświetlać na wszystkich popularnych przeglądarkach.</p>
			</article>
			<article>
			  <i className="fas fa-search" />
			  <h3>indeksacja strony</h3>
			  <p>Zaindeksujemy Twoją stronę internetową w wyszukiwarce google.</p>
			</article>
			<article className="assets-logo">
			  <img src={AssetsLogoSVG} alt="Wybierz co potrzebujesz na swojej stronie" />
			</article>
			<article>
			  <i className="fas fa-paint-brush" />
			  <h3>projekt graficzny</h3>
			  <p>Jeśli nie posiadasz swojego projektu graficznego to przygotujemy go specjalnie dla Ciebie</p>
			</article>
			<article>
			  <i className="fas fa-envelope" />
			  <h3>skrzynki pocztowe</h3>
			  <p>Będziesz miał możliwość tworzenia skrzynek w domenie strony, np. kontakt@twojafirma.pl</p>
			</article>
			<article>
			  <i className="fas fa-shopping-cart" />
			  <h3>Sklepy E-commerce</h3>
			  <p>Oferujemy wiodące w branży, bezpieczne i niezawodne systemy e-commerce, w tworzonych przez nas stronach www.</p>
			</article>
			<article>
			  <i className="fas fa-code" />
			  <h3>Szybkość Interakcji</h3>
			  <p>Wszystkie nasze strony internetowe są niestandardowo kodowane w lekkiej ramie, która jest zgodna z aktualnymi standardami projektowania stron internetowych i SEO.</p>
			</article>
		  </AssetsContainer>
		</div>
	  </section>
	  <section className="margin-top-medium">
		<BigInfo>Oto Nasze Wybrane Realizacje</BigInfo>
		<SmallInfo className="wrapper">
		  Strony internetowe wykonujemy od lat. W ich budowaniu doszliśmy do perfekcji. Możesz mieć pewność,
		  że Twoja strona będzie unikatowa i wyróżniająca się na tle konkurencji. Poniżej prezentujemy nasze przykładowe realizacje.
		</SmallInfo>
		<OurDoneProjectsHolder/>
	  </section>
	</>
  );
};

export default WebsiteSection;
