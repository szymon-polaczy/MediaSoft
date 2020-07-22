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
        right: 0;
        top: 5rem;
        height: calc(100vh - 5rem);
        z-index: 90;
        transition: transform ease-in-out .35s;
        border: 3px solid var(--theme-color);
        padding: 2rem;
        background: #fff;
        font-weight: bold;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

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