import HttpService from "./HttpService";

class MovieService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get("movies");

    return data;
  };
}

const movieService = new MovieService();

export default movieService;
