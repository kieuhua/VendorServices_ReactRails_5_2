	
class AllServices extends React.Component {
	handleDelete(id) {
		this.props.handleDelete(id);
	}
	
	handleEdit() {
		
	}
	onUpdate(service) {
		this.props.onUpdate(service);
	}
			
	render() {
	//	var services = this.state change to
		var services_list = this.props.services
	  	var services = this.props.services.map((service) => {
			return (
				<div key={service.id}>
					<Service service={service} 
						handleDelete={this.handleDelete.bind(this, service.id)}
						handleUpdate={this.onUpdate} />
				</div>
			);
		});

		return <div>
		 <p> kieu in AllServices</p>
			{ services }
		</div>
	}
}
