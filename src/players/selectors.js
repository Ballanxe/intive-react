import { createSelector } from 'reselect';

const allPlayers = state => state.all_players
const searchName = state => state.player_name
const searchPosition = state => state.position
const searchAge = state => state.age


export const searchedPlayersSelector = createSelector(
  [allPlayers, searchName, searchPosition, searchAge],
(players, name, position, age) =>

    players.filter(
        element =>{
          return element.name.includes(name)||
                 element.position.includes(position) ||
                 element.age.toString() === age
        }
  )

)

