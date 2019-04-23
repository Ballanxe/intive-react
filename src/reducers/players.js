import defaultState from '../store/initialStates/player.js'
import { createSelector } from 'reselect'


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
        all_players: action.players  
      };

    default:
     return state;
  }
}

const allPlayers = state => state.all_players
const searchName = state => state.player_name
const searchPosition = state => state.position
const searchAge = state => state.number


export const searchedPlayersSelector = createSelector(
  [allPlayers, searchName, searchPosition, searchAge],
  (players, name, position, age) => players.filter(
    element =>{
      return element.name.includes(name) ||
             element.position.includes(position) ||
             element.age.toString() === age
    }

  )

)


