import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import { Validators } from '@lemoncode/fonk';

const checkboxValidator = ({ values }) => {
	const succeeded = values.policy || false;

	return {
		succeeded,
		message: succeeded
			? ''
			: 'Twoja zgoda jest wymagana aby wysłać tą wiadomośc.',
		type: 'POLICY',
	};
};

const validationSchema = {
	field: {
		fullName: [ 
			{
				validator: Validators.required.validator,
				message: "Pełne imię i nazwisko jest wymagane."
			}
		],
			email: [
			{
				validator: Validators.required.validator,
				message: "Email jest wymagany."
			},
			{
				validator: Validators.email.validator,
				message: "Podaj poprawny adres email."
			}
		],
		title: [
			{
				validator: Validators.required.validator,
				message: "Podaj tytuł swojej wiadomości."
			}
		],
		message: [
			{
				validator: Validators.required.validator,
				message: "Podaj wiadomość jaką chcesz do nas wysłać."
			}
		],   
			policy: [checkboxValidator],
	},
};

export const formValidation = createFinalFormValidation(validationSchema);