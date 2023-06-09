import './App.css'
import { useState } from 'react'
import Card from './components/card/card'
import Form from './components/form/form'


function App() {
  const [persona, setPersona] = useState()

  function handleSubmit(persona) {
    setPersona(persona)
    console.log(persona.name);
  }
  
  return (
    <>
      <Form onSubmit={handleSubmit}/>
      
      {persona ? <Card name= {persona.name} raza={persona.raza}/> : null}
    </>
  )
}

export default App
