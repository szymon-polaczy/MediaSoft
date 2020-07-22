import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { formValidation } from './FormValidation'

class ContactForm extends Component {
    render() {
        return (
            <section>
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
                                    <div>
                                        <label>Imię i Nazwisko</label>
                                        <input {...input}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="email" type="email">
                                {({input, meta}) => (
                                    <div>
                                        <label>Numer telefonu</label>
                                        <input {...input} pattern="[0-9]{9}"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="message">
                                {({input, meta}) => (
                                    <div>
                                        <label>Twoja wiadomość</label>
                                        <input {...input}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="policy" type="checkbox">
                                {({input, meta}) => (
                                    <div>
                                        <input {...input}/>
                                        <label>Wyrażam zgodę na przetwarzanie moich danych osobowych</label>
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
            </section>
        )
    }
}  

export default ContactForm;