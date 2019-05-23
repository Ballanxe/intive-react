export const attributeValidators = {
  player_name: playerNameValid,
  age: playerAgeValid,
}

/**
 * Check if player name is valid
 * @param  {object} searchParams
 * @return {boolean} -
 */
function playerNameValid(searchParams){
  const letters = /^[A-Za-z ]+$/;

  return searchParams.player_name != '' ? !!searchParams.player_name.match(letters) : true 
}

/**
 * Check if player age is valid
 * @param  {object} searchParams    
 * @return {bollean}
 */
function playerAgeValid(searchParams) {

  const numbers = /^[0-9]+$/;

  return searchParams.age !== '' 
  		? !!searchParams.age.match(numbers) 
  		&& searchParams.age <= 80 
  		&& searchParams.age >= 18 
  		: true

}

