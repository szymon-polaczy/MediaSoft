import React, { Component } from 'react'
import styled from 'styled-components'

const MessageForm = styled.form`
    grid-area: form;
    box-shadow: 0 0 .3rem #e5e5e5;
    border-top: 5px solid var(--theme-color-lighter);
    padding: 1rem;
    background: #fff;

    input {
        border: none;
        outline: none;
    }

    h2 {
        font-size: 2rem;
    }

    small {
        display: block;
    }

    .checkbox-box {
        margin: 1.5rem 0 .8rem 0;
    }

    input[type=submit] {
        padding: .45rem 2.5rem;
        font-size: 1.05rem;
        letter-spacing: 0.02rem;
        border-radius: .25rem;
        background: linear-gradient(to right, #5B86E5, #36D1DC);
        color: #fff;
        margin: .8rem 0 .4rem 0;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 1fr;

        input {
            box-sizing: border-box;
            border-bottom: 2px solid #444;
            padding: .35rem;
            width: 90%;
        }

        div {
            display: flex;
            flex-flow: column;
            align-items: center;
        }

        .message-box {
            grid-area: 2 / 1 / span 1 / span 2;

            input {
                width: 100%;
            }
        }

        label {
            display: block;
            font-size: 1.1rem;
            letter-spacing: 0.04rem;
            color: #444;
            padding: .35rem 0;
            margin-top: 1.65rem;
        }
    }
`;

class Form extends Component {
    render() {
        return (
            <MessageForm>
                <h2>Wypełnij formularz</h2>
                <small>Odpowiadamy naprawdę szybko!</small>
                <section>
                    <div>
                        <label htmlFor="name-input">Imię i Nazwisko:</label>
                        <input type="text" placeholder="Jan Kowalski" id="name-input" required/>
                    </div>
                    <div>
                        <label htmlFor="phone-input">Telefon:</label>
                        <input type="tel" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" id="phone-input" required />
                    </div>
                    <div className="message-box">
                        <label htmlFor="message-input">Wiadomość:</label>
                        <input type="text" placeholder="Twoja wiadomość" id="message-input" required />
                    </div>  
                </section>
                <div className="checkbox-box">
                    <input type="checkbox" id="policy-requirement" required />
                    <label htmlFor="policy-requirement">Wyrażam zgodę na przetwarzanie moich danych osobowych</label>
                </div>
                <input type="submit" value="Wyślij"/>
            </MessageForm>
        )
    }
}  

export default Form;