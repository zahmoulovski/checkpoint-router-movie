import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import { info,theme } from '../Data/Data.js';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

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

// func dark
const [theme, setTheme] = useState(
  localStorage.getItem('Theme') || 'Light'
);
useEffect(() => {
  localStorage.setItem('theme', theme);
  document.body.className = theme;
}, [theme]);
//theme btn

const [buttonText, setButtonText] = useState(theme);

  const handleTheme = () => {
   // toggleTheme()
    if (buttonText === "Light"){
      setButtonText('Dark')
      setTheme('Light')
    } else {
    setButtonText('Light')
    setTheme('Dark')
    ;}
  }

// theme btn
// func dark

  return(
    <div className={`App ${theme}`}>
        <Filtring filter={filter}/>
        <Button onClick={()=>handleTheme()} variant="secondary">
                    Switch to : {buttonText}
                    </Button>
        <MovieList list={filterVideos} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;
