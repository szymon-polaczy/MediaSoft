import React from "react"
import styled from "styled-components"

const WebsiteHolder = styled.article`
    width: 320px;
    height: 180px;
    background-color: #efefef;
    background: #fff;
    position: relative;
    margin: 1vh;
    overflow: hidden;

    @media screen and (max-width: 330px) {
        width: 225px;
        height: 127px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .15s transform ease-out;
    }

    a {
        color: #5588bb;
    }

    p {
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: 0;
        text-align: center;
        padding: 1vh 0;
        transform: translateY(100%);
        transition: .15s transform ease-out;
    }

    &:hover img,
    &:hover p {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    &:hover p {
        transform: translateY(0);
    }
    
    &:hover img {
        transform: scale(1.1);
    }
`;

export default (props) => {
    return (
        <WebsiteHolder className="box-shadow">
            <a href="https://szymonpolaczy.pl" target="_blank" rel="noopener noreferrer">
                <img src={props.img_src} alt={props.img_alt} />
                <p>{props.title}</p>
            </a>        
        </WebsiteHolder>
    )
}