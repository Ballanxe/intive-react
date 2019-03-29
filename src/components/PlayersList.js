import React from 'react';

const PlayersList = props => {
	if (!props.players){
		return (
			<div className="container">Loading...</div>
		)
	}

	if (props.players.length === 0){
		return (
			<div className="container">No players found</div>
		)
	}

	return (

		<div>
			{
				Array.prototype.map.call(props.players, (player, i)=>{
				  return <p key={i}>Nombre:{player.name}, Pais: {player.nationality}, Numero de camiseta: {player.jerseyNumber}</p>
				})
			}
		</div>
	)
}

export default PlayersList