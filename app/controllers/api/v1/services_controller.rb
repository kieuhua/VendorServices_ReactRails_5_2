class Api::V1::ServicesController < Api::V1::BaseController
  def index
     respond_with Service.all
  end
  
  def create
     respond_with :api, :v1, Service.create(serivce_params)
  end
  
  def destroy
     #respond_with :api, :v1, Service.destroy(params[:id])
     respond_with Service.destroy(params[:id])
  end
  
  def update
      service = Service.find(params["id"])
      service.update_attributes(service_params)
      response_with service, json: service
  end
  
private

  def service_params
    params.require(:service).permit(:id, :name, :description)
  end
end