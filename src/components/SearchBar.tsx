import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  width: number;
  actionSearch: (text: string) => void;
}

function SearchBar({ placeholder = "", width, actionSearch }: SearchBarProps) {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <div
        className={`rounded-md bg-main-6 border-main-5 border-4 px-4 py-2 w-${width}`}
      >
        <input
          id="searchBar"
          type="text"
          placeholder={placeholder}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button
          onClick={() => {
            actionSearch(busqueda);
            setBusqueda("");
            document.getElementById("searchBar").value = "";
          }}>
          <img src="../assets/line-md--search.svg" alt="search-logo" />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
