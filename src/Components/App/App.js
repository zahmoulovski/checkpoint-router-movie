import React, {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import { info,theme } from '../Data/Data.js';
//import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import "../styles.scss"

function App(){
  
  const [list,setList] = useState(info);
  const [filterVideos, setfilterVideos] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setfilterVideos(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate)  ) } ));
    
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);

// const [theme, setTheme] = useState(
//   false
// );
// useEffect(() => {
//  const theItem = localStorage.getItem('theme');
//   document.body.className = theItem;
// }, [theme]);

//   const handleTheme = () => {
//     setTheme(!theme)
//     localStorage.setItem("theme",theme)
//   }

  return(
    <div>
        <Filtring filter={filter}/>
        {/* <Button onClick={()=>handleTheme()} variant="secondary">
                    Switch to : {theme?"Dark":"Light"}
                    </Button> */}
        <MovieList list={filterVideos} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;
