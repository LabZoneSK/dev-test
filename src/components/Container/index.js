import React, { useState, useEffect } from 'react';
import apiKey from '../../config';
import ImgList from '../ImgList';
import axios from 'axios';
import { Box, Text, Flex } from '@chakra-ui/layout';
import SearchForm from '../SearchForm';

const Container = () => {
  
  let defaultQuery = 'Ice Castle';

  const [loading, setLoading] = useState(true);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    setLoading(true);
    performSearch(defaultQuery);
  }, []);

  const performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=26&page=1&format=json&nojsoncallback=true`)
      .then(response => {
        setImgs(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }
  
  const handleSubmit = (query) => {
    setLoading(true);
    performSearch(query);
  };

  return(
    <Box 
      bg="#EFEFEF" 
      height="calc(100vh - 130px)" 
      className="photo-container overflow-y-auto">
      <Box 
        px={{base: "24px", md: "76px"}} 
        pt="24px">
        <SearchForm apiKey={apiKey} handleSubmit={handleSubmit} />
      </Box>
      {loading ? (
        <Flex className="items-center justify-center h-full">
          <Text className="text-center text-lg">Loading...</Text>
        </Flex>
      ) : ( 
        <ImgList data={imgs} /> 
      )}
    </Box>
  );
}

export default Container;