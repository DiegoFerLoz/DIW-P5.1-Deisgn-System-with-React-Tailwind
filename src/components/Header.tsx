import SearchBar from "./SearchBar"

function Header() {
  return (
    <div className="bg-main-3 text-white py-6 px-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="logo" alt="logo" />
        <ul className="flex gap-4">
          <li><a href="#">Home</a></li>
          <li><a href="Nosotros">Nosotros</a></li>
          <li><a href="Servicios">Servicios</a></li>
          <li><a href="Contacto">Contacto</a></li>
        </ul>
      </div>
      <SearchBar placeholder="Buscar" width={70} actionSearch={(text) => console.log(text)}></SearchBar>
    </div>
  )
}

export default Header