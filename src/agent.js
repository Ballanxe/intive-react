import superagentPromise from 'superagent-promise';
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise);

const PLAYERS_URL = 'https://football-players-b31f2.firebaseio.com/players.json'

const responseBody = res => res.body 


const Players = {
	all: () => 
		superagent.get(PLAYERS_URL).then(responseBody)
	
}

export default {
	Players,

}