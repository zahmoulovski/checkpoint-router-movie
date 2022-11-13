import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/Data';
import YtModal from './Components/YtModal';


const Trailer = () => {
  const {id}=useParams()
  const filmID=info.find((e)=>e.id==id)
  return (
    <div className='containerT'>
    <div className='trailer' style={{ backgroundImage: `url(${filmID.background})` }}>
    <YtModal/>
      <h1>{filmID.title}</h1>
      <img src={filmID.img} alt='Poster' />
      <p className="description">{filmID.description}</p>
    </div>
    </div>
  )
}

export default Trailer
