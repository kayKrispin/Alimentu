import {
    SUBMIT_CONTACT_FORM,
} from './constans';

import contactService from './service';

export const submitContactForms = () => ({
    type: SUBMIT_CONTACT_FORM,
    payload: 'success'
});

export const submitContactForm = statmentOfClaim => {
   return contactService.submitForm(statmentOfClaim)
};