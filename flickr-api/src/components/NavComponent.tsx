import React from 'react';
import {
  Box,
  Flex,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  useDisclosure,
  Heading,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsSearch } from 'react-icons/bs';

interface NavProps {
    title: string;
    search: CallableFunction;
  }

const Nav: React.FC<NavProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="#2C2C2C" px={4}>
        <Flex h="65px" alignItems="center" justifyContent="space-between">
          <Box color="#FFF" style={{ fontSize: '28px', lineHeight: '34px' }}>
            {props.title}
          </Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<BsSearch color="#fff" />} />
                  <Input type="text" name="name" placeholder="Search" onChange={(event) => props.search(event.target.value)} />
                </InputGroup>
              </FormControl>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Nav;
