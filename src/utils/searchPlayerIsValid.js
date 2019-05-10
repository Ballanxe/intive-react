export default function searchPlayerIsValid(errors) {
  return !Object.values(errors).some(err => err)
}