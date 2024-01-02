import { useRef, Dispatch, SetStateAction } from "react";

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

  return (
    <div className="searchbar">
      <input
        ref={searchBar}
        placeholder="Search a image you want..."
      />
      <button className="search-btn" onClick={handleChange}>
      Search
        </button>
    </div>
  );
};

export default Search;
