import superagentPromise from 'superagent-promise';
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise);

const PLAYERS_URL = 'https://football-players-b31f2.firebaseio.com/players.json'

const responseBody = res => res.body 


const getAllPlayers = () => superagent.get('https://football-players-b31f2.firebaseio.com/players.json').then(res => res.body)


const Players = {
	all: () => {
		// let players_list = ['Hola']

		superagent.get('https://football-players-b31f2.firebaseio.com/players.json')
			.then(res => res.body)


	// () => superagent.get('https://football-players-b31f2.firebaseio.com/players.json').then(responseBody)
}
}


export default {
	Players,
	getAllPlayers
}