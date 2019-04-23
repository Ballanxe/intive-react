import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, MenuItem, Grid, Button } from '@material-ui/core';
// import MenuItem from '@material-ui/core/MenuItem';

import * as playersAction  from '../actions/players';


class PlayersSearch extends React.Component{

	state = {
		positions: [
			"",
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
			players_name:this.props.player_name == "" ? null : this.props.player_name,
			position: this.props.position,
			age: this.props.number == "" ? null : this.props.number
		})
	}
	render(){

		return(
			<Grid container style={{ marginTop:20, marginBottom:20 }}>
				<form noValidate autoComplete="off" style={{ width:100+'%' }}>
					<Grid item style={{ display:'flex', flexWrap:'nowrap', alignItems:"center"}}>
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
					  label="Position"
					  style={{
					  	color:"#ffffff",
					  	margin: 8
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
					<Button 
						variant="contained"
						color="primary"
						type="submit"
						onClick={this.onSubmitForm}
						style={{ width:300 }}>
					  Search
					</Button>
					</Grid>
				</form>
			</Grid>
			
		)
	}

}

const mapStateToProps = state => ({
	...state.playersReducer,

})

export default connect(mapStateToProps, () => ({}))(PlayersSearch);
