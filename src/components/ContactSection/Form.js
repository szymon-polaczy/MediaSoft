import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import { formValidation } from './FormValidation'

const MessageFormSection = styled.section`
    grid-area: form;
    box-shadow: 0 0 .3rem #e5e5e5;
    padding: 1rem;
    border-top: 5px solid var(--theme-color-lighter);

    h2 {
        font-size: 2rem;
    }

    small {
        display: block;
    }

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;

        input {
            border: none;
            outline: none;
            box-sizing: border-box;
            border-bottom: 2px solid #444;
            padding: .35rem;
        }

        div:not(.buttons) {
            display: flex;
            margin-top: 1.65rem;
        }

        div:not(.buttons):not(.checkbox-box) {
            flex-flow: column;
        }

        .fullname-box {
            margin-right: 10px;
        }

        .message-box {
            grid-column: 1 / span 2;
        }

        .checkbox-box {
            grid-column: 1 / span 2;
            flex-flow: row;
            align-items: center;

            input {
                height: 1rem;
                width: 1rem;
            }
        }

        label {
            font-size: 1.1rem;
            display: block;
            letter-spacing: 0.05rem;
            color: #444;
            padding: .35rem;
        }

        span {
            margin-top: .35rem;
            color: #f33;
        }

        button {
            border: none;
            outline: none;
            padding: .45rem 2.5rem;
            font-size: 1.05rem;
            letter-spacing: 0.02rem;
            border-radius: .25rem;
            background: linear-gradient(to right, #5B86E5, #36D1DC);
            color: #fff;
            margin: .8rem 0 .4rem 0;
            transition: .15s transfrom ease-out;

            &:hover {
                transform: scale(1.1);
                transition: .2s transfrom ease-out;
            }

            &:active {
                transform: scale(.95);
                transition: .2s transfrom ease-out;
            }
        }

        @media (max-width: 550px) {
            grid-template-columns: 1fr;

            .message-box, .checkbox-box {
                grid-column: unset;
            }

            .checkbox-box input {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;

class ContactForm extends Component {
    render() {
        return (
            <MessageFormSection>
                <h2>Wypełnij formularz</h2>
                <small>Odpowiadamy naprawdę szybko!</small>

                <Form 
                    onSubmit={values => {
                        //For now I'm only gonna console.log the values - in the future I plan to send these values to netlify
                        console.log({values});
                    }}
                    initialValues={{
                        fullName: '',
                        email: '',
                        message: '',
                        policy: null,
                    }}
                    validate={(values) => formValidation.validateForm(values)}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="fullName">
                                {({input, meta}) => (
                                    <div className="fullname-box">
                                        <label htmlFor="form-fullname-input">Imię i Nazwisko</label>
                                        <input {...input} id="form-fullname-input"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="email" type="email">
                                {({input, meta}) => (
                                    <div div="email-box">
                                        <label htmlFor="form-phone-input">Numer telefonu</label>
                                        <input {...input} pattern="[0-9]{9}" id="form-phone-input"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="message">
                                {({input, meta}) => (
                                    <div className="message-box">
                                        <label htmlFor="form-message-input">Twoja wiadomość</label>
                                        <input {...input} id="form-message-input"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="policy" type="checkbox">
                                {({input, meta}) => (
                                    <div className="checkbox-box">
                                        <input {...input} id="form-policy-checkbox"/>
                                        <label htmlFor="form-policy-checkbox">Wyrażam zgodę na przetwarzanie moich danych osobowych</label>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div className="buttons">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    )}
                />
            </MessageFormSection>
        )
    }
}  

export default ContactForm;