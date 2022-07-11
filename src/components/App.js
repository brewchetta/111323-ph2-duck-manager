import React, { useState } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList />

      <DuckDisplay />

      <button>Open Duck Form</button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      <DuckForm />

    </div>
  );
}

export default App;
