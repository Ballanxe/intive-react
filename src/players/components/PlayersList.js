import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    size:100,

  },
});

const PlayersList = props => {

	const { classes } = props;
	
	if (!props.allPlayers){
		return (
			<div className="container text-center" data-test="no-all-players">
				<CircularProgress className={classes.progress} />
			</div>
		)
	}

	if (!props.searchPlayers){
		return (
			<div className="container text-center" data-test="no-search-players">No players found</div>
		)
	}

	return (

		<Paper data-test="players-fetched" className="players-list-wrapper">
		  <Table >
		    <TableHead>
		      <TableRow>
		        <TableCell >Player</TableCell>
		        <TableCell >Position</TableCell>
		        <TableCell >Team</TableCell>
		        <TableCell >Age</TableCell>
		      </TableRow>
		    </TableHead>
		    <TableBody>
		      { props.searchPlayers ? props.searchPlayers.map((player, i)=>(
		      	<TableRow key={i}>
		      	  <TableCell component="th" scope="row">
		      	    {player.name}
		      	  </TableCell>
		      	  <TableCell >{player.position}</TableCell>
		      	  <TableCell >{player.nationality}</TableCell>
		      	  <TableCell >{player.age}</TableCell>
		      	</TableRow>
		      )) : Array.prototype.map.call(props.allPlayers, (player, i)=>(
		      	<TableRow key={i}>
		      	  <TableCell component="th" scope="row">
		      	    {player.name}
		      	  </TableCell>
		      	  <TableCell >{player.position}</TableCell>
		      	  <TableCell >{player.nationality}</TableCell>
		      	  <TableCell >{player.age}</TableCell>
		      	</TableRow>
		      ))}
		    </TableBody>
		  </Table>
		</Paper>

	)
}


export default withStyles(styles)(PlayersList);

