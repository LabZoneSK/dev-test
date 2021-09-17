import { FcSearch } from "react-icons/fc";

function Search({ searchBar, handleChange, ChangeSearchType }: any) {
  return (
    <div className="searchbar">
      <select name="typeOfSearch" onChange={ChangeSearchType}>
        <option value="text">Text</option>
        <option value="tags">Tag</option>
      </select>
      <input
        ref={searchBar}
        placeholder="Write here what you want to search as images .."
      />{" "}
      <button onClick={handleChange}>
        {" "}
        <FcSearch />
      </button>
    </div>
  );
}

export default Search;
