import React from 'react';

// const mapStateToProps = state => ({
// 	...state.
// })

class PlayersSearch extends React.Component{

	state = {

		player_name: null,
		position: null,
		number:null,
		error: {
			string_error:null,
			number_error:null,
			long_age_error:null
		},
		formInvalid: true

	}

	isFormValid = () => this.setState({formInvalid:true})

	onSubmitForm = (event) => {
		event.preventDefault()
		this.setState({
			player_name: event.target.elements.player_name.value,
			position:event.target.elements.position.value,
			number:event.target.elements.number.value,
		})
	}

	onUpdatePosition = (event) =>{

		let value = event.target.value;

		if(value == ''){
			this.setState({
					position: null,
					formInvalid: true
			})
		}else{
			this.setState({
					position: event.target.value,
					formInvalid: false
			})
		}

		// event.target.value !== '' ? this.setState({position:null,formInvalid:true}) : this.setState({position:event.target.value,formInvalid:false})
	} 

	validateAge = (event) => {
		let value = event.target.value
		let numbers = /^[0-9]+$/

		if (value === ''){
			this.setState({
				number: null,
				formInvalid:true,
				error:{
					long_age_error:null,
					number_error:null
				}
			})
		}
		if(!value.match(numbers)){

			this.setState({
				number: null,
				formInvalid:true,
				error:{
					...this.state.error,
					number_error:"just numbers please"
				}
			})
			
		}else if(value.length > 2){
			this.setState({
				number: null,
				error: {
					...this.state.error,
					number_error: "too long age",
					long_age_error: null
				},
				formInvalid:true
			})
		}else{
			this.setState({
				number: value,
				error: {
					number_error: null,
					long_age_error: null
				},
				formInvalid:false
			})
		}
	}


	validatePlayerName = (event) => {
		const letters = /^[A-Za-z ]+$/
		const value = event.target.value

		if(value === ''){
			return 
		}else if (!value.match(letters)){

		}else{
			this.setState({
				error: {
					...this.state.errors,
					string_error: null
				},
				player_name: value,
				formInvalid: false
			})
		}

	}

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