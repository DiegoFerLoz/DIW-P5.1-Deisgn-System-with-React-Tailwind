// import { useState } from 'react'
import Button from "./components/Button"

function App() {

  return (
    <>
    <div className="">
      <h1 className="text-2xl font-bold">Prueba de botones.</h1>
      <Button text="Normal" actionClick={() => console.log("Prueba")}></Button>
      <Button text="Desactivado" variant="disabled" actionClick={() => console.log("Prueba")}></Button>
      <Button text="Botón grande" width={80} actionClick={() => console.log("Prueba")}></Button>
    </div>
      
    </>
  )
}

export default App
