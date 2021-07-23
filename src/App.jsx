import { Route } from "react-router-dom";
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";


// Pages
import HomePage from "./Pages/HomePage";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";
import Events from "./Pages/Events.page";
import Sports from "./Pages/Sports.page";
import Activities from "./Pages/Activities.page";
import Stream from "./Pages/Stream.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path ="/movie/:id" exact component = {Movie} />
      <DefaultHOC path= "/plays" exact component = {Plays} />
      <DefaultHOC path = "/events" exact component={Events} />
      <DefaultHOC path = "/sports" exact component={Sports} />
      <DefaultHOC path = "/activities" exact component={Activities} />
      <MovieHOC path="/stream" exact component={Stream} />
  
    </>
  );
}

export default App;