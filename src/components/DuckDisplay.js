import React from 'react'

function DuckDisplay({ featuredDuck, setDucks, ducks, setFeaturedDuck }) {

  function handleClick() {

    const editedDuckObj = { ...featuredDuck, likes: featuredDuck.likes + 1 }

    const editedDucksArray = ducks.map( duck => {
      if (duck.id !== featuredDuck.id) {
        return duck
      } else {
        return editedDuckObj
      }
    })

    setDucks(editedDucksArray)
    setFeaturedDuck(editedDuckObj)

    fetch(`http://localhost:4001/ducks/${editedDuckObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(editedDuckObj)
    })
    .then( res => res.json() )
    .then( () => {
      
    })

  }

  return (
    <div className="duck-display">

      <h2>{featuredDuck.name}</h2>

      <img src={featuredDuck.img_url} alt={featuredDuck.name} />

      <button onClick={ handleClick }>{featuredDuck.likes} likes</button>

    </div>
  )
}

export default DuckDisplay
