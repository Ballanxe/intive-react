import { attributeValidators } from './attributeValidators';


/**
 * Creates an object to be pased to the middleware to check if fields are valid
 * @param  {object} - the search parameters
 * @return {object} - object with valid or invalid fields
 */
export default function searchPlayersValidationErrors(searchParameters) {

  return Object.keys(attributeValidators).reduce((errors, validator) => {

    errors[validator] = !attributeValidators[validator](searchParameters)
    
    return errors;

  }, {})

}


