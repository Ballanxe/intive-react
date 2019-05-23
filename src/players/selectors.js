import { createSelector } from 'reselect';

const allPlayers = state => state.all_players
const searchName = state => state.player_name
const searchPosition = state => state.position
const searchAge = state => state.age


/**
 * Selector that filters players by name position and age
 * @returns {array} - a list of objects filtered from all player
 */

export const searchedPlayersSelector = createSelector(
  [allPlayers, searchName, searchPosition, searchAge],
(players, name, position, age) =>
	
    players.filter(
        element =>{

          return element.name.toLowerCase().includes(name.toLowerCase()) &&
                 element.position.includes(position) &&
                 element.age.toString().includes(age.toString())
        }
  )

)

