import React from 'react'
import styled from 'styled-components'

const Test = styled.section`
    background: #ff677d;
    padding: 3.25rem 0;
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    margin: 3rem 0 7rem 0;

    h2 {
        margin-bottom: 3.25rem;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    article {
        padding: 1rem 0;
        border-right: 3px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row;
    }

    article:last-child {
        border: none;
    }

    a {
        color: #fff;
    }

    i {
        margin-left: 1.2rem;
        font-size: 2rem;
    }
`;

export default () => {
    return (
        <Test>
            <h2>Co chcesz u nas sprawdzić?</h2>
            <div class="container">
                <article>
                    <a href="#">Strony WWW</a>
                    <i class="fas fa-code"></i>
                </article>
                <article>
                    <a href="#">Hosting</a>
                    <i class="fas fa-cogs"></i>
                </article>
                <article>
                    <a href="#">Domeny</a>
                    <i class="fas fa-search"></i>
                </article>
                <article>
                    <a href="#">Google Adwords</a>
                    <i class="fas fa-chart-line"></i>
                </article>
            </div>
        </Test>
    )
}