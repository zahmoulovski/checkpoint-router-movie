import "./styles.css";
import MovieCard from "./MovieCard";
import React from "react";

function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (ele,index)=>(
            <MovieCard key={index} ele={ele} />
        ))
        }
        </div>
    );
}

export default MovieList;