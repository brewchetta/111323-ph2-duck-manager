import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({ 
    name: "Quackspeare", 
    img_url: "https://m.media-amazon.com/images/I/61crZL432aL._SX466_.jpg" 
  })
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4001/ducks')
    .then( res => res.json() )
    .then( data => setDucks(data) )
  }, [])

  function handleClick() {
    setDuckFormOpen( prevValue => !prevValue )
  }

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList ducks={ducks} setFeaturedDuck={setFeaturedDuck} />

      <DuckDisplay featuredDuck={featuredDuck} setDucks={setDucks} ducks={ducks} setFeaturedDuck={setFeaturedDuck} />

      <button onClick={ handleClick }>
        { duckFormOpen ? "Close" : "Open" } Duck Form
      </button>

      { duckFormOpen ? <DuckForm setDucks={setDucks} ducks={ducks} /> : null }

    </div>
  );
}

export default App;