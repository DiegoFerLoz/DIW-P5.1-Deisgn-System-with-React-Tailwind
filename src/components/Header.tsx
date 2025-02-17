import SearchBar from "./SearchBar"

function Header() {
  return (
    <div className="bg-main-3 text-white py-6 px-6 flex justify-between items-center font-source-code-pro">
      <div className="flex items-center gap-4">
        <img src="assets/PISTACHO.jpg" alt="Logo" className="w-25 rounded-[100px]"/>
        <ul className="flex gap-7">
          <li><a href="#" className="text-paragraph leading-paragraph">Home</a></li>
          <li><a href="Nosotros" className="text-paragraph leading-paragraph">Nosotros</a></li>
          <li><a href="Servicios" className="text-paragraph leading-paragraph">Servicios</a></li>
          <li><a href="Contacto" className="text-paragraph leading-paragraph">Contacto</a></li>
        </ul>
      </div>
      <SearchBar id="SearchHeader" placeholder="Buscar" actionSearch={(text) => console.log(text)}></SearchBar>
    </div>
  )
}

export default Header