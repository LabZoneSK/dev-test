import { useRef, Dispatch, SetStateAction, KeyboardEvent } from "react";
import { FcSearch } from "react-icons/fc";

interface SearchProps {
  setPage: Dispatch<SetStateAction<number>>;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearchText }) => {
  const searchBar = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const input = searchBar.current;
    if (input) {
      setSearchText(`&text=${input.value}`);
    }
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleChange();
    }
  };
  return (
    <div className="searchbar">
      <input
        ref={searchBar}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={handleChange}>
      {" "}
    <FcSearch />
        </button>
    </div>
  );
};

export default Search;
