import "./styles.css";
import ReactStars from "react-rating-stars-component";
import React,{useRef,useState} from "react";

export default function Filtring({filter}) {
    let searchRef = useRef();
    const [rate, setRate] = useState(0);

    const ratingChanged = (newRating) => {
         filter(searchRef.current.value,newRating);
        setRate(newRating)
    };

    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }

    return (
            <div>
                <form className="Filterform" onChange={submitted}>
                    <h2>Filter</h2>
                    <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." />
                    <ReactStars count={10}
                            onChange={ratingChanged}
                            size={20}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </form> 
            </div>
        );
    }