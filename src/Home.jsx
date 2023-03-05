import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post("https://hoblist.com/api/movieList", {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        });
        setMovies(result.data.result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <div className="navbar"><NavLink to='/menubar'><button className="menu">Menu bar</button></NavLink></div>
            <h1>Movie List</h1>
              {movies.map((movie) => (  
                  <>
                  <div className="container1">
                  <div className="container2">
                    <div className="votes"><div className="vote"><p>{movie.voting}</p> <p>votes</p> </div></div>
                    <div className="image"><img src={movie.poster} class="card-img-top" alt="..." style={{height:'230px',width:'170px'}} /><button className="btn btn-primary">Watch trailer</button></div>
                    <div className="content"><h2 className="card-title">{movie.title}</h2>
                      <p > genre : {movie.genre}</p>
                      <p>Director:{movie.director}</p>
                      <p>starring:{movie.stars}</p>
                      <p>Mins | {movie.language} </p>
                      <p style={{color:'blue'}}>{movie.pageViews} views | voted by {movie.voting} people</p>
                      </div>
                      
                  </div>
                  
                  </div>
                  
                  </>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
