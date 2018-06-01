
class NewService extends React.Component {
	/*constructor(props) {
		super(props);
		name, description = this.state;
	} */
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;
		$.ajax({
			url: "/api/v1/services",
			type: "POST",
			data: { service: { name: name, description: description }},
			// its callback, pass on the service object from the AJAX request as an argument of the parent
			success: (service) => {
				this.props.handleSubmit(service);
			}
			
		});
	}
	
	render() {
		return (
			<div>
				<input ref={this.props.name} placeholder='Enter the name of the Service' />
				<input ref={this.props.description} placehoder='Enter a description' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		);
	}
}
