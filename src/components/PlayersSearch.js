import React from 'react';

import * as playersAction  from '../actions/players';

const mapStateToProps = state => ({
	...state.playersSearch,

})


class PlayersSearch extends React.Component{

	// state = {

	// 	name:null,
	// 	position:null,
	// 	number: null
	// }

	// on

	render(){
		console.log(this.state)

		const {error} = this.state
		const {formInvalid} = this.state
		const {position} = this.state

		return(
			<div className="container">
				<div className="row">
					<form onSubmit={this.onSubmitForm}>
						<fieldset className="form-group">
						{error.string_error ? <div className="error">{error.string_error}</div> : null }
							<input
								className="form-control"
								type="text"
								name="player_name"
								placeholder="Player Name"
								onChange={this.validatePlayerName} />

						</fieldset>
						<select value={position} onChange={this.onUpdatePosition} name="position">
							<option value="">Select...</option>
							<option value="Goal Keeper">Goal Keeper</option>
							<option value="Defender">Defender</option>
							<option value="Midfielder">Midfielder</option>
							<option value="Forward">Forward</option>
						</select>
						<fieldset className="form-group" name="number">
							{error.number_error ? <div className="error">{error.number_error}</div> : null }
							{error.long_age_error ? <div className="error">{error.long_age_error}</div> : null }
							<input
								className="form-control"
								type="text"
								placeholder="Age"
								onChange={this.validateAge} />

						</fieldset>
						<button
						  className="btn btn-primary"
						  type="submit"
						  disabled={formInvalid}
						  onClick="">
						  Search
						</button>
					</form>
				</div>
			</div>
		)
	}

}

export default PlayersSearch