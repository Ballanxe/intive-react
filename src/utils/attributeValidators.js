export const attributeValidators = {
  player_name: playerNameValid,
  age: playerAgeValid,
}

function playerNameValid(searchParams){
  const letters = /^[A-Za-z ]+$/;

  return searchParams.player_name != null ? !!searchParams.player_name.match(letters) : true 
}

function playerAgeValid(searchParams) {

  const numbers = /^[0-9]+$/;

  return searchParams.age !== null ? !!searchParams.age.match(numbers) && searchParams.age.length < 3 : true

}

