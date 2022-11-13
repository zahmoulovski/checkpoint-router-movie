import "./styles.css";
import ReactStars from "react-rating-stars-component";
import React, { useRef,useState } from "react";

export default function AddMovie({adding}) {

    let titleRef = useRef();
    let imgurlRef = useRef();
    let posurlRef = useRef();
    let descRef = useRef();
    let idRef = useRef();
    let [rate, setRate] = useState(0);
    const ratingChanged = (newRating) => {
        setRate(newRating);
    };

    function submitted(ev){
        ev.preventDefault();

        let movieObject = {
            title:titleRef.current.value,
            img:imgurlRef.current.value,
            description:descRef.current.value,
            trailer:posurlRef.current.value.replace("watch?v=","embed/"),
            rating:rate,
            id:idRef.current.value.replace(" ", "-"),
        };
        adding(movieObject);

        //save all this information in localStorage

    }

    return (
        <div className="AddMovie">
            <form onSubmit={submitted}>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Title </span>
                    <input ref={titleRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Write the movie's title" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Pseudo </span>
                    <input ref={idRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Write the movie's title without spaces" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Image URL </span>
                    <input ref={imgurlRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Paste the movie poster URL" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Trailer URL </span>
                    <input ref={posurlRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Paste the movie trailer from YouTube"/>
                </div>

                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea ref={descRef} className="form-control" aria-label="With textarea" placeholder="Write the movie description"></textarea>
                </div>

                <div className="rating">
                <h6> Rating :  </h6>
                <ReactStars count={10}
                            onChange={ratingChanged}
                            size={20}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
            </form>
        </div>
    )
}
