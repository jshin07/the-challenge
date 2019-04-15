/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (values) => {
  const errors = {};
  if (!values.get('firstname') || values.get('firstname').trim() === '') {
    errors.firstname = true
    errors.errorMessage = 'First Name Required'
  } 
  if (!values.get('lastname')|| values.get('lastname').trim() === '') {
    errors.lastname = true
    errors.errorMessage = 'Last Name Required'
  }
  if (!values.get('username')|| values.get('username').trim() === '') {
    errors.username = true
    errors.errorMessage = 'User Name Required'
  }

  return errors;
};
