class Api::V1::ServicesController < Api::V1::BaseController
  def index
     respond_with Service.all
  end
  
  def create
     #byebug
     respond_with :api, :v1, Service.create(service_params)
  end
  
  def destroy
     #respond_with :api, :v1, Service.destroy(params[:id])
    # byebug
     respond_with Service.destroy(params[:id])
  end
  
  def update
      #byebug
      service = Service.find(params["id"])
      #byebug
     # response_with service.update_attributes(service_params)
      service.update_attributes(service_params)
      #byebug
      response_with service, json: service
  end
  
private

  def service_params
    params.require(:service).permit(:id, :name, :description)
  end
end