import React, {useState,useEffect} from 'react';
import AddMovie from "./AddMovie.js";
import MovieList from './MovieList.js';
import Filtring from './Filtring.js';
import { info } from './Data.js';
import "./styles.css";


function HomeApp(){
  
  const [list,setList] = useState(info);
  const [filterVideos, setfilterVideos] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.trailer ) {
      setList([...list, movie]);
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

export default HomeApp;
