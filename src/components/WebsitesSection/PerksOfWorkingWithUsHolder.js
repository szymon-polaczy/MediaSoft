import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import AssetsLogoSVG from '../../images/undraw_mobile_wireframe_euf4.svg'

const PerksHolder = styled.section`
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

	article:not(.assets-logo) {
		display: flex;
		align-items: center;
		flex-flow: column;
		padding: 1rem;

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
	}

	.assets-logo img {
		max-width: 100%;
		max-width: 100%;
		object-fit: contain;
	}
`;

const setProperPerk = (project) => {
	return (
		<article>
			<div className="ring"><img src={project.icon.uploadId.url} alt={project.icon.alt} /></div>
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		</article>
	)
}

const chooseOnlyPerkOrPerkAndImage = (project, index) => {
	if (index !== 4) 
		return setProperPerk(project);

	return (
		<>
			<article className="assets-logo">
				<img src={AssetsLogoSVG} alt="Wybierz co potrzebujesz na swojej stronie" />
			</article>
			{ setProperPerk(project) }
		</>
	)
}

const PerksOfWorkingWithUsHolder = () => {
    const CMS_PerksOfOurWork = useStaticQuery(graphql`
	{
		allDatoCmsPerkofourwork {
			nodes {
				title
				description
				id
				icon {
					uploadId {
						url
					}
					alt
				}
			}
		}
	}
  `);

    return (
        <>
            <PerksHolder>
                { CMS_PerksOfOurWork.allDatoCmsPerkofourwork.nodes.map((project, index) => ( chooseOnlyPerkOrPerkAndImage(project, index) )) }
		    </PerksHolder>
        </>
    )
}

export default PerksOfWorkingWithUsHolder;