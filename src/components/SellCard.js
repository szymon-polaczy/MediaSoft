import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SellCard = styled.article`
    width: 20rem;
    padding: 1rem 0 3rem 0;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    margin: 1.5rem;

    h2 {
        font-size: .8rem;
        font-weight: bold;
        padding: .65rem 1rem 1.65rem 1rem;
    }

    span {
        display: block;
        font-size: 1.2rem;
        margin-top: .25rem;
        text-transform: uppercase;
    }

    .price-holder {
        background: #eee;
        padding: 2rem 0;
        color: var(--theme-color);
        position: relative;
        margin-bottom: 1.5rem;
        font-size: 2rem;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .price-holder::after {
        content: "";
        display: block;
        width: 0;
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-top: 1rem solid #eee;
        position: absolute;
        bottom: -1rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    a {
        position: absolute;
        bottom: 0;
        margin: 0 auto -1rem 0;
        left: 0;
        right: 0;
    }

    &:hover .price-holder {
        box-shadow: inset 0 -5em 0 0 var(--theme-color);
        color: #fff;
      }

    &:hover .price-holder::after {
        border-top: 1rem solid var(--theme-color);
    }

    @media screen and (max-width: 875px) {
        margin: 1rem .5rem;
    }
`;

export default (props) => {
    return (
        <SellCard className="box-shadow">
            <h2>{props.title_type} <span>{props.title_name}</span></h2>
            <div className="price-holder">{props.price}</div>
            <Link to={props.link}><button>Szczegóły</button></Link>
        </SellCard>
    )
}