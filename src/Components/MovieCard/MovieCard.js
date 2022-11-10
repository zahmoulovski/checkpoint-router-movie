import "./moviecard.css";

export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                    <div>
                    <img className="poster" width="85%" src={ele.img} alt="Poster" />
                    </div>
                    <div >
                    <h2 className="title">{ele.title}</h2>
                    <p className="genre">{ele.genre}</p>
                    <p className="description">{ele.description}</p>
                    <p className="spanRate"><span className="rate"> Rate : </span>{ele.rating}</p>
                    <h4 className="url">{ele.posterURL}</h4>
                    </div>
            </div>
    )
}
