//var createReactClass = require('create-react-class');
//var service = React.createClass({
	
class Service extends React.Component {
	/*getInitializeState() { deprecated methods
		return {editable: false}
	}*/
	constructor(props) {
		super(props);
		this.state = { editable: false, name: '', description: ''};
		// make handleEdit class method, so it call in render works ??	
		this.handleEdit = this.handleEdit.bind(this);
		this.onHandleChangeName = this.onHandleChangeName.bind(this);
		this.onHandleChangeDescription = this.onHandleChangeDescription.bind(this);
	}
	// two alert("I am in handleEdit"); work
	handleEdit() {
		// alert("I am in handleEdit 1 "); work
		if (this.state.editable) {
			//alert("I am in handleEdit 2");  // work
			var name = this.state.name;
			var description = this.state.description;
			//alert(" name= " + name + ";  description= " + description + "end"); // work
			var id = this.props.service.id;	
			//alert(id);						// work
			//var name = this.refs.name.value;
			//var description = this.refs.description.value
			//salert("I am in handleEdit 3");  //  work
			//alert({ this.state.name });   // not work

			// everything work until here, the service is 
			//this.props.handleUpdate(service);
			if (name === "") { name = this.props.service.name; }
			if (description === "") { description = this.props.service.description; }
			var service = { id: id, name: name, description: description };
			this.props.handleUpdate(service);
		}
		// change editable from false to true when 'Edit' button click
		// this is not working, when I click the editable should change to true
		// the render should be call to render the new input for name and description 
		// and a 'Submit' button
		//var flag = !this.state.editable;
		//alert("I am in handleEdit");

		// the editable should be toggle, when button change between 'Edit' and 'Submit'
		this.setState({editable: !this.state.editable});
	}

	onHandleChangeName(event) {
		this.setState({ name: event.target.value});
		//var name = this.state.name;
		//alert(name); 
	}
	onHandleChangeDescription(event) {		
		this.setState({ description: event.target.value});
	}

	// all these works in render
	// <p>I am in Service</p>
	// <p>editable = {this.state.editable? "it is true" : "it is false"} </p>
	// {this.props.service.id}
	// handleDelete is define in AllServices, then in Body
	// {name} {description} are rendered works, {nam} is <h3>
	// so this.state.editable == false then
	// the Edit button, either print 'Submit' or 'Edit'
	render() {
		var name = this.state.editable ? 
			<input type='text' defaultValue={this.props.service.name} onChange={this.onHandleChangeName} /> : 
			<span><strong>{this.props.service.name} </strong></span>;
		var description = this.state.editable ? 
			<input type='text'   defaultValue={this.props.service.description} onChange={this.onHandleChangeDescription} /> : 
			<span>{this.props.service.description} </span>;
		return (
			<div>
				
				{this.props.service.id}
				{name}
				{description}
				
				<button onClick={this.props.handleDelete}>Delete</button>
				<button onClick={this.handleEdit}>{"  "} {this.state.editable ? "Submit" : "Edit"}{"  "}</button>
			</div>
		)
	}
}
//});