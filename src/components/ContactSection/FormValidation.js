import { createFinalFormValidation } from '@lemoncode/fonk-final-form'
import { Validators } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        fullName: [Validators.required.validator],
        email: [
            Validators.required.validator,
            Validators.email.validator,
        ],
        message: [Validators.required.validator],
        policy: [Validators.required.validator],        
    },
};

export const formValidation = createFinalFormValidation(validationSchema);