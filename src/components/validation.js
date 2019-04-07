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