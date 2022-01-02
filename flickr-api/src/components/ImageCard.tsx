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
          {props.author !== undefined ? props.author.split('"')[1] : ''}
        </Text>
        <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
          {props.title}
        </Heading>
        <Stack direction="row" align="center">
          <Text color="gray.600">
            {props.dateTaken}
          </Text>
        </Stack>
        <Accordion allowToggle allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Description
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div dangerouslySetInnerHTML={{ __html: props.description! }} />

            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Tags
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {props.tags
                ? (
                  <Wrap direction="row" align="center">
                    {props.tags?.split(' ').map((tag) => (
                      <WrapItem>
                        <Tag>{tag}</Tag>
                      </WrapItem>

                    ))}
                  </Wrap>
                ) : null}

            </AccordionPanel>
          </AccordionItem>
          <Button
            mt={10}
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
            rightIcon={<BsArrowRight />}
          >
            Explore
          </Button>
        </Accordion>
      </Stack>
    </Box>
  </Box>
);
export default ImageCard;
