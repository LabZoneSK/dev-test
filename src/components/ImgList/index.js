import { Box } from '@chakra-ui/layout';
import React from 'react';
import ImgBox from '../ImgBox';
import NotFound from '../NotFound'

const ImgList = props => { 
  
  const results = props.data;
  let imgs;

  if (results.length) {
    imgs = results.map(img => {
      let id = img.id;
      let path = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
      return <ImgBox data={img} url={`${path}`} key={id} />
    });    
  } else {
    imgs = <NotFound />
  }

  return(
    <Box 
      px={{base: "0px", md: "51px"}} 
      py="26px" 
      className="flex items-center justify-center md:justify-between flex-wrap">
      {imgs}
    </Box>
  );
}

export default ImgList;

