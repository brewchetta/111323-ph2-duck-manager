import React from 'react'
import DuckListCard from './DuckListCard'

function DuckList({ ducks, setFeaturedDuck }) {
  return (

    <div className="duck-nav">
    
      { ducks.map( duck => <DuckListCard key={duck.id} duck={duck} setFeaturedDuck={setFeaturedDuck} /> ) }
    
    </div>

  )
}

export default DuckList
