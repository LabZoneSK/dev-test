import React from 'react';
import {
  Box,
  Wrap,
  WrapItem,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

const htmlRegex = /(<([^>]+)>)/ig;
interface ImageProps {
    title?: string;
    dateTaken?:string;
    author?:string;
    imgUrl?:string;
    tags?:string;
    description?:string;
    link?:string;
  }
const ImageCard: React.FC<ImageProps> = (props) => (
  <Box py={12} style={{ borderRadius: '3px' }}>
    <Image
      height={154}
      width={286}
      borderTopRadius="3px"
      objectFit="cover"
      src={props.imgUrl}
    />
    <Box
      role="group"
      p={6}
      maxW="286px"
      w="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="2xl"
      rounded="lg"
      pos="relative"
      zIndex={1}
    >

      <Stack pt={2} align="center">
        <Heading fontSize="28px" fontFamily="body" fontWeight={500}>
          {props.title}
        </Heading>
        <Text>
          {props.description?.replace(htmlRegex, '')}
        </Text>
        <Button
          mt={10}
          size="md"
          height="44px"
          width="235px"
          border="2px"
          borderRadius="3px"
          backgroundColor="#F5F5F5"
          textColor="#0B868B"
          fontSize="16px"
          fontWeight="normal"
          borderColor="#0B868B"
          onClick={() => window.open(props.link, '_blank')}
          rightIcon={<BsArrowRight />}
        >
          Explore
        </Button>
      </Stack>
    </Box>
  </Box>
);
export default ImageCard;
