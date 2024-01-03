import { Search } from "./Search";

export const Main = ({ allImages }) => {
  return (
    <main className="flex flex-col p-7 mb-11">
      <Search images={allImages}></Search>
    </main>
  );
};
