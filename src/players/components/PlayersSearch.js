import React from 'react';
import { connect } from 'react-redux';

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

	updateFieldEvent = key => ev => {

		this.setState({
			[key]:ev.target.value === '' ? '' : ev.target.value
		})
	} 
	changeName = this.updateFieldEvent('player_name')
	changePosition = this.updateFieldEvent('position')
	changeAge = this.updateFieldEvent('age')
	onSubmitForm = (e) => {
		e.preventDefault()
		this.props.onSubmitForm({
			player_name: this.state.player_name,
			position: this.state.position,
			age: this.state.age
		})
	}
	render(){

		const {position} = this.state
		const {positions} = this.state
		const {errors} = this.props

		return(
			<Grid container style={{ marginTop:20, marginBottom:20 }}>
				<form noValidate autoComplete="off" style={{ width:100+'%' }}>
					<Grid item style={{ display:'flex', flexWrap:'nowrap', alignItems:"center"}}>
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
	...state.playersReducer,

})

export default connect(mapStateToProps, () => ({}))(PlayersSearch);
