import React, { useState } from 'react'

function DuckForm({ setDucks, ducks }) {

  const [duckName, setDuckName] = useState('')
  const [duckImage, setDuckImage] = useState('')


  function handleChangeDuckName(event) {
    setDuckName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch(`http://localhost:4001/ducks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: duckName,
        img_url: duckImage,
        likes: 0
      })
    })
    .then( res => res.json() )
    .then( newDuckData => setDucks( [...ducks, newDuckData] ) )
  }


  return (
    <form id="new-duck-form" onSubmit={handleSubmit}>
       <label htmlFor="duck-name-input">New Duck Name:</label>
       <input type="text" 
        name="duck-name-input" 
        value={duckName} 
        onChange={handleChangeDuckName} />
       
       <label htmlFor="duck-image-input">New Duck Image URL:</label>
       <input type="text" 
       name="duck-image-input"
       value={duckImage}
       onChange={ event => setDuckImage(event.target.value) } />

       <input type="submit" value="Create Duck" />
    </form>
  )
}

export default DuckForm
