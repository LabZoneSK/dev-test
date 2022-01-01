import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

interface ImageProps {
    title?: string;
    description?:string;
    author?:string;
    imgUrl?:string;
  }
const ImageCard: React.FC<ImageProps> = (props) => (
  <Box py={12}>
    <Box
      role="group"
      p={6}
      maxW="330px"
      w="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="2xl"
      rounded="lg"
      pos="relative"
      zIndex={1}
    >
      <Box
        rounded="lg"
        mt={-12}
        pos="relative"
        height="230px"
      >
        <Image
          rounded="lg"
          height={230}
          width={282}
          objectFit="cover"
          src={props.imgUrl}
        />
      </Box>
      <Stack pt={10} align="center">
        <Text color="gray.500" fontSize="sm" textTransform="uppercase">
          {props.author}
        </Text>
        <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
          {props.title}
        </Heading>
        <Stack direction="row" align="center">
          <Text color="gray.600">
            {props.description}
          </Text>
        </Stack>
      </Stack>
    </Box>
  </Box>
);
export default ImageCard;
