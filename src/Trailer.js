import React from 'react';
import {useParams} from 'react-router-dom';
import { info } from './Components/Data';
import YtModal from './Components/YtModal';


const Trailer = () => {
  const {id}=useParams()
  const filmID=info.find((e)=>e.id==id)
  return (
    <container className='trailer' style={{ backgroundImage: `url(${filmID.background})` }}>
      <img className='trailerposter' src={filmID.img} alt='Poster' />
      <h1>{filmID.title}</h1>
      <YtModal/>
      <p className="description">{filmID.description}</p>
    </container>
  )
}

export default Trailer
