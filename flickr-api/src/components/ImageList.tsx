import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { types, getSnapshot } from 'mobx-state-tree';
import ImageCard from '../components/ImageCard';
import FlickrStore from '../stores/FlickrStore';

interface ImageListProps {
  }
const imageStore = FlickrStore.create();
imageStore.fetchContent().then(() => {
  console.log(getSnapshot(imageStore));
});
const CardList = observer((props) => (
  <>
    {imageStore.items.map((item) => (
      <ImageCard
        title={item.title}
        author={item.author}
        dateTaken={item.date_taken}
        imgUrl={item.media.m}
      />
    ))}
  </>
));
const ImageList: React.FC<ImageListProps> = (props) => (
  <Box py={12}>
    <SimpleGrid columns={{ base: 1, md: 5 }} spacing={2}>

      <CardList />
    </SimpleGrid>
  </Box>
);
export default ImageList;
