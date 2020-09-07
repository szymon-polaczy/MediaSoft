import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import AssetsLogoSVG from '../../images/undraw_mobile_wireframe_euf4.svg'

const PerksHolder = styled.section`
	display: grid;
	gap: .5rem;
	grid-template-columns: 1fr 1fr 1fr;
	text-align: center;

	&::after, &::before {
		content: '';
		display: block;
		position: absolute;
		border: 90px solid transparent;
	}

	&::after {
		left: 0;
		border-left: 90px solid #FFAFBD;
	}

	&::before {
		right: 0;
		border-right: 90px solid #ffc3a0;
		transform: translateY(32rem);
	}

	.assets-logo img {
		max-width: 100%;
		max-width: 100%;
		object-fit: contain;
	}

	@media (max-width: 1100px) {
		&::after, &::before  {
			display: none;
		}
	}

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;

		.assets-logo {
			grid-column: 1 / span 2;
		}
	}

	@media (max-width: 600px) {
		display: flex;
		flex-flow: row;
		overflow-x: scroll;
		max-width: 100%;
		padding: .65rem;
		scroll-snap-type: x mandatory;

		.assets-logo {
			grid-column: unset;
			justify-content: center;
		}
	}
`;

const Project = styled.article`
	display: flex;
	align-items: center;
	flex-flow: column;
	padding: 1rem;
	scroll-snap-align: center;

	.ring {
		width: 4rem;
		height: 4rem;
		border: 2px solid #444;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 2.2rem;
			height: 2.2rem;
			color: #ff677d;
		}
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

	@media (max-width: 600px) {
		min-width: 50vw;
	}

	@media (max-width: 450px) {
		min-width: 100vw;
	}
`;

const setProperPerk = ({id, icon, title, description}) => {
	return (
		<Project key={id}>
			<div className="ring"><img src={icon.url} alt={icon.alt} /></div>
			<h3>{title}</h3>
			<p>{description}</p>
		</Project>
	)
}

const chooseOnlyPerkOrPerkAndImage = (project, index) => {
	if (index !== 4) 
		return setProperPerk(project);

	return (
		<React.Fragment key={project.id + "-central-immg"}>
			<Project className="assets-logo" key="central-img">
				<img src={AssetsLogoSVG} alt="Wybierz co potrzebujesz na swojej stronie" />
			</Project>
			{ setProperPerk(project) }
		</React.Fragment>
	)
}

const PerksOfWorkingWithUsHolder = () => {
    const CMS_PerksOfOurWork = useStaticQuery(graphql`
	{
		allDatoCmsPerkofourwork {
			nodes {
				title,
				description,
				id,
				icon {
					url,
					alt,
				}
			}
		}
	}
  `);

    return (
        <>
            <PerksHolder className="wrapper">
                { CMS_PerksOfOurWork.allDatoCmsPerkofourwork.nodes.map((project, index) => ( chooseOnlyPerkOrPerkAndImage(project, index) )) }
		    </PerksHolder>
        </>
    )
}

export default PerksOfWorkingWithUsHolder;