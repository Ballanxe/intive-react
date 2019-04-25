import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PlayersList = props => {
	if (!props.allPlayers){
		return (
			<div className="container">Loading...</div>
		)
	}

	if (!props.searchPlayers){
		return (
			<div className="container">No players found</div>
		)
	}

	return (

		<Paper >
		  <Table >
		    <TableHead>
		      <TableRow>
		        <TableCell>Player</TableCell>
		        <TableCell >Position</TableCell>
		        <TableCell >Team</TableCell>
		        <TableCell >Age</TableCell>
		      </TableRow>
		    </TableHead>
		    <TableBody>
		      { props.searchPlayers ? Array.prototype.map.call(props.searchPlayers, (player, i)=>(
		      	<TableRow >
		      	  <TableCell component="th" scope="row">
		      	    {player.name}
		      	  </TableCell>
		      	  <TableCell align="right">{player.position}</TableCell>
		      	  <TableCell align="right">{player.nationality}</TableCell>
		      	  <TableCell align="right">{player.age}</TableCell>
		      	</TableRow>
		      )) : Array.prototype.map.call(props.allPlayers, (player, i)=>(
		      	<TableRow >
		      	  <TableCell component="th" scope="row">
		      	    {player.name}
		      	  </TableCell>
		      	  <TableCell align="right">{player.position}</TableCell>
		      	  <TableCell align="right">{player.nationality}</TableCell>
		      	  <TableCell align="right">{player.age}</TableCell>
		      	</TableRow>
		      ))}
		    </TableBody>
		  </Table>
		</Paper>

	)
}

export default PlayersList
