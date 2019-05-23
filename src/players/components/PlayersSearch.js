import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playersActions  from '../actions';

import { TextField, MenuItem, Grid, Button } from '@material-ui/core';


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
		],
		player_name: '',
		position: '',
		age: '' 

	}
	/**
		* Update component state with the inputs data.
		* @param {object} ev - The envent object
		* @param {string} key - the field name to be updated 
		* @function updateFieldEvent
	*/
	updateFieldEvent = key => ev => {

		this.setState({
			[key]:ev.target.value === '' ? '' : ev.target.value
		})
	} 
	changeName = this.updateFieldEvent('player_name')
	changePosition = this.updateFieldEvent('position')
	changeAge = this.updateFieldEvent('age')
	/**
		* Action creator to update store with the input data
		* @param {object} ev - The envent object
		* @function onSubmitForm
	*/
	onSubmitForm = (e) => {
		e.preventDefault()
		this.props.actions.updatePlayersFilter({
			player_name: this.state.player_name.trim(),
			position: this.state.position,
			age: this.state.age
		})
	}
	render(){

		const {position} = this.state
		const {positions} = this.state
		const {errors} = this.props

		return(
			<Grid container style={{ marginTop:20, marginBottom:20 }} data-test="players-search">
				<form noValidate autoComplete="off" style={{ width:100+'%' }}>
					<Grid item className="inputs-wrapper" style={{ display:'flex', flexWrap:'nowrap', alignItems:"center"}} >
					<TextField
					  id="outlined-full-width"
					  label={errors.player_name ? "Invalid name" : "Players's name"}
					  error = {errors.player_name}
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
					  InputLabelProps={{shrink:position ? true:false}}
					  style={{
					  	color:"#ffffff",
					  	margin: 8
					  }}
					  fullWidth
					  value={position}
					  onChange={this.changePosition}
					  variant="outlined"
					>
				  {positions.map(position => (
					    <MenuItem key={position} value={position}>
					      {position}
					    </MenuItem>
					  ))}
					</TextField>
					
					<TextField
					  id="outlined-full-width"
					  label={errors.age ? "Invalid age" : "Age"}
					  error = {errors.age}
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
	...state.players,

})

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(playersActions, dispatch),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersSearch);
