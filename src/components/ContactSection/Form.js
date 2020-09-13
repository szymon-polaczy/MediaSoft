import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import { formValidation } from './FormValidation'
import emailjs from 'emailjs-com'
import { ReCaptcha } from 'react-recaptcha-google'

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

		textarea {
			resize: none;
		}

		input, textarea {
			border: none;
			outline: none;
			box-sizing: border-box;
			border-bottom: 2px solid #444;
			padding: .35rem;
			transition: all .15s ease-out;

			&::placeholder {
				transition: all .15s ease-out;
			}

			~ label {
				transition: all .15s ease-out;
			}

			&:hover {
				border-bottom: 2px solid #000;
				transition: all .2s ease-out;

				&::placeholder {
					color: #222;
					transition: all .2s ease-out;
				}
			}

			&:focus, &:focus-within, &:active {
				border-bottom: 2px solid #000;
				transform: scale(1.03);
				transition: all .2s ease-out;

				&::placeholder {
					color: #222;
					transition: all .2s ease-out;
				}

				~ label {
					color: #000;
					transition: all .2s ease-out;
				}
			}
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

		.message-box, .title-box {
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

		.user-info {
			color: #222;
			grid-column: 1 / span 2;
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
			transition: .15s all ease-out;

			&:hover {
				transform: scale(1.1);
				transition: .2s all ease-out;
			}

			&:focus, &:focus-within, &:active {
				transform: scale(.95) skew(3deg);
				transition: .2s all ease-out;
			}
		}

		@media (max-width: 550px) {
			grid-template-columns: 1fr;

			.message-box, .checkbox-box, .user-info {
				grid-column: unset;
			}

			.checkbox-box input {
				width: 2rem;
				height: 2rem;
			}
		}
	}

	.disabled {
		background: #ccc;
		color: #fff;
		transform: scale(.9)
		pointer-events: none;
	}
`;

const disableSubmit = () => {
	document.querySelector('#submit-btn').setAttribute('disabled', 'true')
	document.querySelector('#submit-btn').setAttribute('class', 'disabled')
	setTimeout(() => {
		document.querySelector('#submit-btn').removeAttribute('disabled')
		document.querySelector('#submit-btn').removeAttribute('class')
	}, 3000)
}

let captcha = null;
let token = null;
const onLoadRecaptcha = () => {
	if (captcha) {
		captcha.reset();
		captcha.execute();
	}
}

const verifyCallback = (recaptchaToken) => {
	token = recaptchaToken;
	console.log(recaptchaToken, "<= your recaptcha token");

	postData('https://www.google.com/recaptcha/api/siteverify', { secret: process.env.CAPTCHA_SECRET, response: token })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	
  return response.json(); // parses JSON response into native JavaScript objects
}



const ContactForm = () => {
	const [userInfo, setUserInfo] = useState('');

		return (
			<MessageFormSection>
				<h2>Wypełnij formularz</h2>
				<small>Odpowiadamy naprawdę szybko!</small>

				<ReCaptcha
					ref={(el) => {captcha = el;}}
					size="invisible"
					render="explicit"
					sitekey="6LfcocsZAAAAAK0AVEGaO8Ibs8tZvp3y_u0pwvOS"
					onloadCallback={onLoadRecaptcha}
					verifyCallback={verifyCallback}
				/>
				<Form 
					onSubmit={() => {
						emailjs.sendForm('service_xuu4z8k', 'template_54zt0z9', '#contact-form', 'user_C1OXTe9qBeqb5ZOmCejLc')
							.then((result) => {
								setUserInfo('Twoja wiadomośc została wysłana poprawnie');
							}, (error) => {
								setUserInfo('Podczas wysyłania twojej wiadomości pojawił się błąd - Wiadomość nie została wysłana.');
							});
						disableSubmit();
					}}
					initialValues={{
						fullName: '',
						email: '',
						title: '',
						message: '',
						policy: null,
					}}
					validate={(values) => formValidation.validateForm(values)}
					render={({handleSubmit}) => (
						<form onSubmit={handleSubmit} id="contact-form">
							<Field name="fullName">
								{({input, meta}) => (
									<div className="fullname-box">
										<label htmlFor="form-fullname-input">Imię i Nazwisko</label>
										<input {...input} id="form-fullname-input" placeholder="Jan Kowalski"/>
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</div>
								)}
							</Field>
							<Field name="email" type="email">
								{({input, meta}) => (
									<div className="email-box">
										<label htmlFor="form-phone-input">Email</label>
										<input {...input} id="form-phone-input" placeholder="jankowalski@email.com"/>
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</div>
								)}
							</Field>
							<Field name="title">
								{({input, meta}) => (
									<div className="title-box">
										<label htmlFor="form-title-input">Tytuł</label>
										<input {...input} id="form-title-input" placeholder="Wspólna praca nad nowym projektem!?"/>
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</div>
								)}
							</Field>
							<Field name="message">
								{({input, meta}) => (
									<div className="message-box">
										<label htmlFor="form-message-input">Twoja wiadomość</label>
										<textarea rows="3" {...input} id="form-message-input" placeholder="Chciałbym z wami współpracować!"/>
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
								<button type="submit" id="submit-btn">Submit</button>
							</div>
							<span className="user-info">{userInfo}</span>
						</form>
					)}
				/>
				
			</MessageFormSection>
		)
}  

export default ContactForm;