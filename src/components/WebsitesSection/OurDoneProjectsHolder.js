import React, { useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const ProjectsHolderSeeMoreBtn = styled.button`
	margin: 1.5rem auto 1rem auto;
	display: block;
	border: none;
	outline: none;
	background: transparent;
	font-size: 1.4rem;
	letter-spacing: .2rem;
	color: #333;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const ProjectsHolder = styled.section`
	display: flex;
	flex-flow: wrap;
	justify-content: center;
    margin-top: 1.3rem;
    max-height: ${({open}) => open ? '100%' : '300px'};
    overflow-y: ${({open}) => open ? 'visible' : 'hidden'};
    box-shadow: inset 0px -10px 7px 0px rgba(255,255,255,1);

    @media (max-width: 700px) {
        flex-flow: row;
        max-width: 100%;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const Project = styled.article`
    overflow: hidden;
    position: relative;
    margin: .65rem;
    box-shadow: 0 0 .35rem #ccc;
    transition: .2s all ease-out !important;
    min-width: 320px;

    @media (max-width: 700px) {
        scroll-snap-align: center;
    }

	.gatsby-image-wrapper {
		width: 320px;
		margin: .25rem .1rem;
		z-index: -1;
    }    

    a {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(100%);
        text-align: center;
        clip-path: polygon(50% 15%, 100% 55%, 100% 100%, 0 100%, 0 55%);
        background: var(--theme-color-darker);
        color: #fff;
        padding-top: .65rem;
        
        p {
            padding: .65rem;
            font-size: 1.2rem;
        }
    }

    img, a {
        transition: .2s all ease-out !important;
    }

    .gatsby-image-wrapper {
        margin: 0 !important;
    }

    &:hover {
        box-shadow: 0 0 .45rem #444;

        a {
            transform: translateY(0);
        }

        img {
            transform: scale(1.1);
        }
    } 
`

const OurDoneProjectsHolder = () => {
    const [open, setOpen] = useState(false);

    const CMS_DoneProjectsData = useStaticQuery(graphql`
    {
	  allDatoCmsOurdoneproject {
		nodes {
		  title
		  id
		  websitelandingpageimg {
			title
			alt
			fixed(width: 320) {
				...GatsbyDatoCmsFixed
			}
		  }
		}
	  }
	}
  `);

    const GetSeeMoreBtnIfNeeded = (img_array) => {
        const minNumberOfPhotosToActivateTheBtn = 30;
        if (img_array.length > minNumberOfPhotosToActivateTheBtn && window.innerWidth > 700) 
            return (
                <ProjectsHolderSeeMoreBtn onClick={() => setOpen(!open)}>
                    Zobacz {open ?  'Mniej' :  'Więcej'}
                </ProjectsHolderSeeMoreBtn>
            );
    };

    const OneDoneProject = (project) => {
        return (
            <Project key={project.id}>
                <Img 
                    fixed={project.websitelandingpageimg.fixed} 
                    alt={project.websitelandingpageimg.alt} 
                    title={project.websitelandingpageimg.title} />
                <a href={"http://" + project.title} target="_blank" rel="noreferrer">
                    <p>{project.title}</p>
                </a>
            </Project>
        )
    };

    return (
        <>
            <ProjectsHolder open={open}>
                { CMS_DoneProjectsData.allDatoCmsOurdoneproject.nodes.map((project) => ( OneDoneProject(project) )) }
            </ProjectsHolder>
            { GetSeeMoreBtnIfNeeded(CMS_DoneProjectsData.allDatoCmsOurdoneproject.nodes) }
        </>
    )
}

export default OurDoneProjectsHolder;