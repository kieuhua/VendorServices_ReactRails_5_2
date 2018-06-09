//var createReactClass = require('create-react-class');
//var Body = React.createClass({
// solved problem by useing class Body extends React.Component

//var $ = require('jquery') , 
// solved, adding rails-jquery gem and add require jquery, jquery_ujs in application.js

// k I don't need this, bc I use onChange in NewService.js
//import MyRef from './MyRef'; 
	
class Body extends React.Component {
	/*getInitialState() { deprecated method
		return { services: [] }
	}*/
	
	constructor(props) {
		super(props);
		this.state = { services: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.updateServices = this.updateServices.bind(this);
	}
	
	componentDidMount() {
		// jQuery.getJSON(url, [data], [success]), used to get JSON data using an AJAX http Get
		$.getJSON('/api/v1/services.json', (response) => { this.setState({ services: response }) });
	}
	
	handleSubmit(service) {
		var newState = this.state.services.concat(service);
		this.setState({ services: newState })
	}
	
	handleDelete(id) {
		//k interesting the url has back tick not single quote ???
		$.ajax({
			url: `/api/v1/services/${id}`,
			type: 'DELETE',
			success: () => {
				this.removeServiceClient(id)
			}		
		});
	}
	
	removeServiceClient(id) {
		// Array.prototype.filter() => create new Array pass the test
		var newServices = this.state.services.filter((service) => {
			return service.id != id;
		});
		this.setState({ services: newServices });
	}
	
	handleUpdate(service) {
		//alert("in handleUpdate method in Body"); // not work
		//alert(" id = " + service.id + "; name = " + service.name + "; des= " + service.description + " end"); // work
		$.ajax({
			url: `/api/v1/services/${service.id}`,
			type: 'PUT',
			data: { service: service },
			success: () => {
				this.updateServices(service)
			},
			error: (XMLHttpRequest, textStatus, errorThrown) => {
				//alert("Status: " + textStatus);
				//alert("Error: "+ errorThrown);
				this.updateServices(service)
			}
		});
	}
	updateServices(service) {
		// alert("in updateServices method in Body"); // not work
		// create new array without this old service object
		var services = this.state.services.filter((serv) => { return serv.id != service.id });
		// then push this edited service object into services list
		services.push(service);  // not sure how it get back into this.state.services ???
		//alert(services);
		//this.props.reload();
		this.setState({ services: services });
	}
	
	// AllServices args = services, handleDelete, handleUpdate
	render() {
		return (
			<div>		
				<NewService />
				<AllServices services={this.state.services} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />			
			
			</div>
		);
	}
}
