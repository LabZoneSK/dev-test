import React from 'react';
import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';

interface ImageListProps {
  }
const ImageList: React.FC<ImageListProps> = (props) => (
  <Box py={12}>
    <SimpleGrid columns={{ base: 1, md: 5 }} spacing={2}>
      <ImageCard title="asd" author="test" description="test2" imgUrl="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
      <ImageCard title="asd" author="test" description="test2" imgUrl="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
      <ImageCard title="asd" author="test" description="test2" imgUrl="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
      <ImageCard title="asd" author="test" description="test2" imgUrl="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />

    </SimpleGrid>
  </Box>
);
export default ImageList;
