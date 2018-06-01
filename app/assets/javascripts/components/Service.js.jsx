//var createReactClass = require('create-react-class');
//var service = React.createClass({
	
class Service extends React.Component {
	/*getInitializeState() { deprecated methods
		return {editable: false}
	}*/
	constructor(props) {
		super(props);
		this.state = { editable: false }
	}
	handleEdit() {
		if (this.state.editable) {
			var id = this.props.service.id;
			var name = this.refs.name.value;
			var description = this.refs.description.value
			this.props.handleUpdate(service);
		}
		this.setState({editable: !this.state.editable})
	}
	render() {
		var name = this.state.editable ? <input type='text' defaultValue={this.props.service.name} /> : <h3>{this.props.service.name}</h3>;
		var description = this.state.editable ? <input type='text' defaultValue={this.props.service.description} /> : <p>{this.props.service.description} </p>;
		return (
			<div>
				{name}
				{description}
				<button onClick={this.props.handleDelete}>Delete</button>
				<button onClick={this.handelEdit}>{"  "} {this.state.editable ? "Submit" : "Edit"}{"  "}</button>
			</div>
		)
	}
}
//});