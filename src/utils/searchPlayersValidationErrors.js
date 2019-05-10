import { attributeValidators } from './attributeValidators';



export default function searchPlayersValidationErrors(searchParameters) {
  return Object.keys(attributeValidators).reduce((errors, validator) => {


    errors[validator] = !attributeValidators[validator](searchParameters)
 

    // console.log(errors)

    return errors;

  }, {})

}


