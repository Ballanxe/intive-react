import React from 'react';
import { connect } from 'react-redux';

import * as playersAction  from '../actions/players';

const mapStateToProps = state => ({
	...state.playersReducer,

})

class PlayersSearch extends React.Component{


	updateFieldEvent = key => ev => this.props.onChangeField({
		[key]:ev.target.value
	});

	// this.props.onChangeField({
	// 	[key]: ev.target.value
	// })

	changeName = this.updateFieldEvent('player_name')
	changePosition = this.updateFieldEvent('position')
	changeAge = this.updateFieldEvent('number')


	render(){

		console.log(this.props)

		return(
			<div className="container">
				<div className="row">
					<form onSubmit="">
						<fieldset className="form-group">
							<input
								className="form-control"
								type="text"
								name="player_name"
								placeholder="Player Name"
								onChange={this.changeName} />

						</fieldset>
						<select value="" onChange={this.changePosition} name="position">
							<option value="">Select...</option>
							<option value="Goal Keeper">Goal Keeper</option>
							<option value="Defender">Defender</option>
							<option value="Midfielder">Midfielder</option>
							<option value="Forward">Forward</option>
						</select>
						<fieldset className="form-group" name="number">
{/*							{error.number_error ? <div className="error">{error.number_error}</div> : null }*/}
{/*							{error.long_age_error ? <div className="error">{error.long_age_error}</div> : null }*/}
							<input
								className="form-control"
								type="text"
								placeholder="Age"
								onChange={this.changeAge} />

						</fieldset>
						<button
						  className="btn btn-primary"
						  type="submit"
						  disabled=""
						  onClick="">
						  Search
						</button>
					</form>
				</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, () => ({}))(PlayersSearch);