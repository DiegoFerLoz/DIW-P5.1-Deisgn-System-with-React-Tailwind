// import { useState } from 'react'
import Button from "./components/Button"
import SearchBar from "./components/SearchBar"
import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header></Header>

      <div className="">
        <h1 className="text-2xl font-bold">Prueba de botones.</h1>
        <Button text="Normal" actionClick={() => console.log("Botón")}></Button>
        <Button text="Desactivado" variant="disabled" actionClick={() => console.log("Botón")}></Button>
        <Button text="Botón grande" width={80} actionClick={() => console.log("Botón")}></Button>
      </div>
      
      <div>
        <h1 className="text-2xl font-bold">Prueba de barra de búsqueda.</h1>
        <SearchBar id="SearchTest" placeholder="Buscar" width={70} actionSearch={(text) => console.log(text)}></SearchBar>
      </div>

      <div>
        <h1 className="text-2xl font-bold">Prueba de card.</h1>
        <div className="flex gap-10">
          <Card width={70} username="Diego" description="Una card muy bonita, creo que merece un aprobado :)" rating={5}></Card>
          <Card width={70} username="Laura" description="Pues no me gusta, quiero otra card" rating={2}></Card>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
