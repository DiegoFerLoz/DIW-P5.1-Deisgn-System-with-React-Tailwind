import { useState } from "react";

interface SearchBarProps {
  id: string;
  placeholder?: string;
  width: number;
  actionSearch: (text: string) => void;
}

function SearchBar({ id, placeholder = "", width, actionSearch }: SearchBarProps) {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <div
        className={`rounded-md text-main-5 bg-main-6 border-main-5 border-4 ps-4 pe-1 py-1 w-${width} flex justify-between align-middle`}
      >
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={(e) => setBusqueda(e.target.value)}
          className="text-main-5 focus:outline-none"
        />

        <button
          onClick={() => {
            actionSearch(busqueda);
            setBusqueda("");
            const inputElement = document.getElementById(id) as HTMLInputElement;   // Hago un cast a HTMLInputElement, porque si no chilla.
            if (inputElement) {
              inputElement.value = "";
            }
          }}>
          <div className="bg-main-5 rounded-3xl p-1.5">
            <img src="assets/line-md--search.svg" alt="search-logo" className="w-8"/>
          </div>
          
        </button>
      </div>
    </>
  );
}

export default SearchBar;
