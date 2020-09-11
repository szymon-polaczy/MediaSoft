import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import { Validators } from '@lemoncode/fonk';

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
        policy: [
            {
                validator: Validators.required.validator,
                message: "Zgoda jest wymagana do wysłania wiadomości."
            }
        ],        
    },
};

export const formValidation = createFinalFormValidation(validationSchema);