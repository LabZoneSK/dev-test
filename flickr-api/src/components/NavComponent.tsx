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
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsSearch } from 'react-icons/bs';

interface NavProps {
    title: string;
    search?: string;
  }

const Nav: React.FC<NavProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            {props.title}
          </Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<BsSearch />} />
                  <Input type="text" name="name" placeholder="Search" />
                </InputGroup>
              </FormControl>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Nav;
