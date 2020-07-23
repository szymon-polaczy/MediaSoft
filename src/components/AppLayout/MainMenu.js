import React, { useState } from 'react'
import styled from 'styled-components'
import MenuLinks from './MenuLinks'

const Navigation = styled.ul`
    display: flex;
    flex-flow: row;
    
    li {
        padding: 0 1rem;
        margin: .45rem 0;

        a {
            cursor: pointer;
        }

        .active {
            color: #666;
        }
    }

    @media (max-width: 1000px) {
        flex-flow: column;
        background: #fff;
        position: fixed;
        left: 0;
        top: 5rem;
        width: 100vw;
        z-index: -1;
        transition: all ease-in-out .35s;
        /*border: 3px solid var(--theme-color);*/
        padding: 2rem;
        background: #fff;
        font-weight: bold;
        box-shadow: 0 .5rem .5rem #d0d0d0;
        transform: ${({ open }) => open ? 'translateY(-100%)' : 'translateY(0)'};
        opacity: ${({ open }) => open ? '0' : '1'};

        li {
            font-size: 1.25rem;
            margin: .5rem 0;
        }
    }
`

const MenuBtn = styled.button`
    display: none;

    font-size: 2rem;
    outline: none;
    border: none;
    background: transparent;
    transition: all ease-out .15s;

    &:hover {
        transform: scale(1.1);
        transition: all ease-out .15s;
    }

    @media(max-width: 1000px) {
        display: block;
    }
`

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MenuBtn onClick={() => setOpen(!open)}><i class="fas fa-bars"></i></MenuBtn>
            <Navigation open={open} role="navigation">
                <MenuLinks/>
            </Navigation>
            
        </>
    )
}

export default HeaderMenu;