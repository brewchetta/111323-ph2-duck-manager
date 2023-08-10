import React from 'react'

function DuckForm(props) {
  return (
    <form id="new-duck-form">
       <label htmlFor="duck-name-input">New Duck Name:</label>
       <input type="text" name="duck-name-input" />

       <label htmlFor="duck-image-input">New Duck Image URL:</label>
       <input type="text" name="duck-image-input" />

       <input type="submit" value="Create Duck" />
    </form>
  )
}

export default DuckForm
