//var createReactClass = require('create-react-class');
//var Body = React.createClass({
// solved problem by useing class Body extends React.Component

//var $ = require('jquery') , 
// solved, adding rails-jquery gem and add require jquery, jquery_ujs in application.js
	
class Body extends React.Component {
	/*getInitialState() { deprecated method
		return { services: [] }
	}*/
	
	constructor(props) {
		super(props);
		this.state = { services: [] }
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
			url: `/api/vi/services/${id}`,
			type: 'DELETE',
			success: () => {
				this.removeServiceClient(id);
			}
		});
	}
	removeServiceClient(id) {
		// Array.prototype.filter() => create new Array pass the test
		var newServices = this.state.services.filter((service) => {
			return service.id != id;
		});
		this.setState({ service: newServices });
	}
	
	handleUpdate(service) {
		$.ajax({
			url: `/api/v1/services/${service.id}`,
			type: 'PUT',
			data: { service: service },
			success: () => {
			//	console.log('you did it!!!');
				this.updateServices(service);
			}
		});
	}
	updateServices(service) {
		// create new array without this old service object
		var services = this.state.services.filter((serv) => { return serv.id != service.id });
		// then push this new service object into services list
		services.push(service);
	}
	
	render() {
		return (
			<div>
				<NewService handleSubmit={this.handleSubmit} />
				<AllServices services={this.state.services} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
			</div>
		);
	}
}
