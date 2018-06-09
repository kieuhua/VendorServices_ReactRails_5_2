	
class AllServices extends React.Component {
	constructor(props) {
		super(props);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	handleDelete(id) {
		this.props.handleDelete(id);
	}
	
	handleEdit() {
		
	}
	handleUpdate(service) {
		//alert("I am in Update in AllServices");  //work
		// I should call this onUpdate, bc
		// <AllServices services={this.state.services} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />			
		// this.props.onUpdate(service); not working
		//alert(" id = " + service.id + "; name = " + service.name + "; des= " + service.description + " end");
		// service.name and desc are undefine
		// in Body handleUpdate(service) {
		
		var editService = { id: service.id, name: service.name, description: service.description };
		//alert(" id = " + editService.id + "; name = " + editService.name + "; des= " + editService.description + " end");
		//this.props.handleUpdate(editService); //not working
		this.props.onUpdate(editService); //not working
	}
	
	// Servicd args = service, handleDelete, handleUpdate
	render() {
	//	var services = this.state change to
		var services_list = this.props.services
	  	var services = this.props.services.map((service) => {
			return (
				<div key={service.id}>
					<Service service={service} 
						handleDelete={this.handleDelete.bind(this, service.id)}
						handleUpdate={this.handleUpdate} />
				</div>
			);
		});

		return <div>
		 <p> kieu in AllServices</p>
			{ services }
		</div>
	}
}
