
class NewService extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: '', description: '' , value: ''};
		
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.handleAddService = this.handleAddService.bind(this);
	} 
	
	handleAddService() {	
		var name = this.state.name;
		var description = this.state.description
		//var name = "kieu 06_09_18";
		//var description = "kieu works on Satureday.";
		$.ajax({
			url: "/api/v1/services",
			type: "POST",
			data: { service: { name: name, description: description }},
			// its callback, pass on the service object from the AJAX request as an argument of the parent
			success: (service) => {
				// handleSubmit is in Body.js
				this.props.handleSubmit(service);
			}
			
		});
	}
	
	handleChangeName(event) {
		//pp "kieu is here";
		// now it works, after I add 'bind' in constructor
		this.setState({ name: event.target.value });
	}
	handleChangeDescription(event) {
		this.setState({ description: event.target.value });
	}
	
	render() {
		//const {  onChange, onSubmit } = this.props;
		//const {name, description } = this.state;
		return (
			<div>
				<form onSubmit={ this.handleAddService}>
					<input type="text" value={this.state.name}   onChange={this.handleChangeName} placeholder="Service Name"  />
					<input type="text" value={this.state.description}   onChange={this.handleChangeDescription} placeholder="Service Description" />
					<button onClick={this.handleClick}>Submit</button>
				</form>
			</div>
		);
	}
}
