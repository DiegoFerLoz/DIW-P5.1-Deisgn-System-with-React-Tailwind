// import { useState } from 'react'
import Button from "./components/Button"
import SearchBar from "./components/SearchBar"
import Card from "./components/Card"

function App() {

  return (
    <>
      <div className="">
        <h1 className="text-2xl font-bold">Prueba de botones.</h1>
        <Button text="Normal" actionClick={() => console.log("Prueba")}></Button>
        <Button text="Desactivado" variant="disabled" actionClick={() => console.log("Prueba")}></Button>
        <Button text="Botón grande" width={80} actionClick={() => console.log("Prueba")}></Button>
      </div>
      
      <div>
        <h1 className="text-2xl font-bold">Prueba de barra de búsqueda.</h1>
        <SearchBar placeholder="Buscar" width={70} actionSearch={(text) => console.log(text)}></SearchBar>
      </div>

      <div>
        <h1 className="text-2xl font-bold">Prueba de card.</h1>
        <Card width={70} username="Diego" description="Una card muy bonita, creo que merece un aprobado :)" rating={5}></Card>
      </div>
    </>
  )
}

export default App
