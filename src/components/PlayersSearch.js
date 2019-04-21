import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import * as playersAction  from '../actions/players';


class PlayersSearch extends React.Component{

	state = {
		positions: [
			"Keeper",
			"Attacking Midfield",
			"Left-Back",
			"Centre-Back",
			"Defensive Midfield",
			"Left Wing",
			"Centre-Forward",
			"Left Midfield",
			"Central Midfield",
			"Right-Back",
			"Forward",
		]
	}


	updateFieldEvent = key => ev => {

		console.log({
			[key]:ev.target.value
		})

		this.props.onChangeField({
			[key]:ev.target.value
		});
	} 


	changeName = this.updateFieldEvent('player_name')
	changePosition = this.updateFieldEvent('position')
	changeAge = this.updateFieldEvent('number')

	onSubmitForm = (e) => {
		e.preventDefault()
		this.props.onSubmitForm({
			players_name:this.props.player_name,
			position: this.props.position,
			number: this.props.number
		})
	}


	render(){

		return(
			<div className="container">
				<div className="row">
					<form noValidate autoComplete="off">
						<TextField
						  id="outlined-full-width"
						  label="Player name"
						  style={{ margin: 8 }}
						  placeholder="Insert player name"
						  fullWidth
						  margin="normal"
						  variant="outlined"
						  onChange={this.changeName}
						  InputLabelProps={{
						    shrink: true,
						  }}
						/>
						<TextField
						  id="outlined-select-position"
						  select
						  label="PPosition"
						  style={{
						  	width:100,
						  	color:"#ffffff",
						  }}
						  fullWidth
						  value={this.props.position}
						  onChange={this.changePosition}
						  variant="outlined"
						>
					  {this.state.positions.map(position => (
						    <MenuItem key={position} value={position}>
						      {position}
						    </MenuItem>
						  ))}
						</TextField>
						<TextField
						  id="outlined-full-width"
						  label="Age"
						  style={{ margin: 8 }}
						  placeholder="Insert player's age"
						  fullWidth
						  margin="normal"
						  variant="outlined"
						  onChange={this.changeAge}
						  InputLabelProps={{
						    shrink: true,
						  }}
						/>
						<button
						  className="btn btn-primary"
						  type="submit"
						  disabled=""
						  onClick={this.onSubmitForm}>
						  Search
						</button>
					</form>
				</div>
			</div>
		)
	}

}

const mapStateToProps = state => ({
	...state.playersReducer,

})

// export default withStyles(styles)(connect(mapStateToProps, () => ({}))(PlayersSearch));
export default connect(mapStateToProps, () => ({}))(PlayersSearch);

// export default compose(
//     withStyles(styles, {
//         name: 'PlayersSearch',
//     }),
//     connect(mapStateToProps,() => ({})),
// )(PlayersSearch);