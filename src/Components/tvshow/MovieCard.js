import "../styles.css";
import React from "react";
import {Link} from 'react-router-dom';


export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            <div className="card text-white"><img className="poster" width="250px" height="360px" src={ele.img} alt="Poster" />
                                <div className="card-img-overlay">
                                    <h2 className="title">{ele.title}</h2>
                                    <p className="genre">{ele.year} - {ele.genre}</p>
                                    <p className="spanRate"><span className="rate"> Rate : </span>{ele.rating}</p>
                                    <Link to={`/trailer/${ele.id}`} ><a className="btn btn-outline-light">Watch tailer</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}