import "../styles.css";
import "../styles.scss";
import React from "react"

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
                                    <p className="genre">{ele.genre}</p>
                                    {/* <p className="description">{ele.description}</p> */}
                                    <p className="spanRate"><span className="rate"> Rate : </span>{ele.rating}</p>
                                    <h4 className="url">{ele.posterURL}</h4>
                                    <a className="btn btn-outline-light">Watch tailer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}