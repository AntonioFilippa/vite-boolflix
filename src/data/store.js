import { reactive } from "vue";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export const store = reactive({
  //API KEY FOR MOVIEDB
  apiMovie:
    "api.themoviedb.org/3/search/movie?api_key=0a2578f8175a97efa356e0b9a7408e98&language=it_IT",
  apiSeries:
    "api.themoviedb.org/3/search/tv?api_key=0a2578f8175a97efa356e0b9a7408e98&language=it_IT",

  searchTitle: "",

  filmArray: [],

  seriesArray: [],

  combinedArray: [],

  item: {},
});
