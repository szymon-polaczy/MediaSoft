import React from 'react'
import styled from 'styled-components'
import OurDoneProjectsHolder from './OurDoneProjectsHolder'
import PerksOfWorkingWithUsHolder from './PerksOfWorkingWithUsHolder'

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

const WebsiteSection = () => {
  return (
	<>
		<section className="margin-top-medium">
			<BigInfo>Co dostaniesz tworząc z nami stronę?</BigInfo>
			<div className="wrapper">
				<PerksOfWorkingWithUsHolder/>
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
