import React, {useState} from 'react';
import { Button, Input } from "@chakra-ui/react"

const SearchForm  = (props) => {
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    props.handleSubmit(searchQuery);
  };

  return (
    <form 
      className="flex items-center gap-2" 
      onSubmit={handleSubmit}>
      <Input type="search"
        name="search" 
        placeholder="Search..."
        className=""
        value={searchQuery}
        autoComplete="off"
        required
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit" 
        colorScheme="flick-green">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
