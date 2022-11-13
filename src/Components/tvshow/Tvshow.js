import React, {useState,useEffect} from 'react';
import AddMovie from '../AddMovie.js';
import MovieList from './MovieList';
import Filtring from '../Filtring.js';
import { tvshow } from '../Data.js';
import "../styles.css";

function Movie(){
  
  const [list,setList] = useState(tvshow);
  const [filterVideos, setfilterVideos] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(tvshow){
    if( tvshow.title && tvshow.img && tvshow.description && tvshow.trailer ) {
      setList([...list, tvshow]);
    }
  }

  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setfilterVideos(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate)  ) } ));
    
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);

  return(
    <div>
        <Filtring filter={filter}/>
        <MovieList list={filterVideos} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default Movie;
