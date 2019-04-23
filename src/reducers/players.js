import defaultState from '../store/initialStates/player.js'


function getAge(ageString){
  let ageList = ageString.split("-")
  let birthdate = new Date(ageList[0], ageList[1], ageList[2])
  let now = new Date()
  let age = now.getFullYear() - birthdate.getFullYear();

  if (now.getMonth() >= birthdate.getMonth() && now.getDate() > birthdate.getDate()){
    age--;
  }

  return age
}

function getPlayersAge(playersList){
  playersList.forEach(function(element){
    element.age = getAge(element.dateOfBirth)
  })

  return playersList
}


export function playersReducer(state=defaultState, action) {
  switch(action.type) {
    case 'SEARCH_PLAYERS':

      return {
        ...state,
        search_players: action.players
      };
    case "UPDATE_PLAYER_SEARCH":

      return {
        ...state,
        ...action.data,
      };
    case "PLAYERS_HAS_ERROED":
      return {
        ...state,
        errors: {
          ...state.errors,
          submit_error: action.error,
          submit: true
        }
      };
    case "PLAYERS_ARE_LOADING":
      return {
        ...state,
        loading: true
      };

    case "PLAYERS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        all_players: getPlayersAge(action.players) 
      };

    default:
     return state;
  }
}

