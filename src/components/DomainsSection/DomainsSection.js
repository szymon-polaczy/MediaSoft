import React from 'react'
import styled from 'styled-components'
import Hostings from '../../images/undraw_ask_me_anything_k8o0.svg'

const BigInfo = styled.h2`
    font-size: 2.5rem;
    letter-spacing: .05rem;
    line-height: 120%;
    margin: 1rem 0 1.5rem 0;
    text-align: right;

    &::after {
        content: '';
        display: block;
        width: 20rem;
        height: 2px;
        margin-left: auto;
        background-color: #666;
        margin-top: .3rem;
        background: #45B649;
    }
`;

const Try = styled.section`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    section {
        padding: 0 5rem;
    }

    section:last-child {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section img {
        width: 100%;
        transform: translateX(-50px);
    }

    .domains-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-flow: wrap;
    }

    article {
        width: 11rem;
        height: 11rem;
        margin: 1.35rem;
        box-shadow: 0 0 .4rem #e6e6e6;
        text-align: center;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: center;
        border-radius: .65rem;
    }

    article h4 {
        color: #fd746c;
        font-size: 1.8rem;
        letter-spacing: .03rem;
        padding-bottom: .65rem;
        font-weight: bold;
    }

    article span {
        display: block;
        color: #3a7bd5;
        font-size: 1.45rem;
        letter-spacing: .02rem;
        padding: .75rem 0 .45rem 0;
        font-weight: bold;
    }

    article p:last-child {
        font-size: 1rem;
        font-style: italic;
        margin-top: .4rem;
    }
`;

export default () => {
    return (
        <Try>
            <section>
                <BigInfo>Wybierz domenę dla swojej strony</BigInfo>
                <div className="domains-wrapper">
                    <article>
                        <h4>.pl</h4>
                        <p>Pierwszy rok <span>10.90zł</span></p>
                        <p>Odnowienie 109zł</p>
                    </article>
                    <article>
                        <h4>.com</h4>
                        <p>Pierwszy rok <span>49.90zł</span></p>
                        <p>Odnowienie 89zł</p>
                    </article>
                    <article>
                        <h4>.org</h4>
                        <p>Pierwszy rok <span>49.90zł</span></p>
                        <p>Odnowienie 89zł</p>
                    </article>
                    <article>
                        <h4>.net</h4>
                        <p>Pierwszy rok <span>49.90zł</span></p>
                        <p>Odnowienie 89zł</p>
                    </article>
                    <article>
                        <h4>.biz</h4>
                        <p>Pierwszy rok <span>49.90zł</span></p>
                        <p>Odnowienie 89zł</p>
                    </article>
                    <article>
                        <h4>.info</h4>
                        <p>Pierwszy rok <span>49.90zł</span></p>
                        <p>Odnowienie 89zł</p>
                    </article>
                    <article>
                        <h4>.eu</h4>
                        <p>Pierwszy rok <span>119zł</span></p>
                        <p>Odnowienie 129zł</p>
                    </article>
                </div>
            </section>
            <section>
                <img src={Hostings} alt="Hosting Logo" />
            </section>
        </Try>
    )
}