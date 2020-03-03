import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Welcome = styled.section`
    height: 50vh;
    position: relative;

    h1::after {
        display: none;
    }

    .gatsby-image-wrapper {
        height: 100%;
    }

    h1 {
        position: absolute;
        z-index: 5;
        top: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        text-shadow: 0 0 1rem #000;
        text-transform: uppercase;
        letter-spacing: 0.2vw;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default (props) => {
    return (
        <Welcome className="welcome-section">
            <Img fluid={props.img} alt={props.alt} />
            <h1>{props.message}</h1>
        </Welcome>
    )
}