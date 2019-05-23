
/**
 * Checks if some of the values of the error object is false
 * @param  {object} errors
 * @return {boolean}
 */
export default function searchPlayerIsValid(errors) {
  return !Object.values(errors).some(err => err)
}