import ApiService from "../services/ApiService";

const Service = new ApiService();

export const getImages = async (search,page,endpointServer) =>
  Service.getData("/search?query=" + search + "&page=" + page,endpointServer);