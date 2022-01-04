import React from 'react';
import {
  Box,
  SimpleGrid,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import ImageCard from '../components/ImageCard';
import FlickrStore from '../stores/FlickrStore';

interface ImageListProps {
    searchText:string;
  }
const imageStore = FlickrStore.create();
imageStore.fetchContent();
const CardList = observer((props:ImageListProps) => (
  <>
    {imageStore.isLoading ? (
      <Center>
        {' '}
        <Spinner color="green.500" />
      </Center>
    ) : (
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={2}>
        {imageStore.listItems(props.searchText).map((item) => (
          <ImageCard
            title={item.title}
            author={item.author}
            dateTaken={item.date_taken}
            imgUrl={item.media.m}
            tags={item.tags}
            description={item.description}
            link={item.link}
          />
        ))}
      </SimpleGrid>
    )}

  </>
));
const ImageList: React.FC<ImageListProps> = (props) => (
  <Box py={12} background="#EFEFEF" style={{ paddingTop: 81, paddingLeft: 76, paddingRight: 76 }}>
    <CardList {...props} />

  </Box>
);
export default ImageList;
